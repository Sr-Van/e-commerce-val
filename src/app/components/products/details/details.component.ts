import { Component, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { Title } from '@angular/platform-browser';

import { Products } from 'src/types/product.interface';

import { getItemsService } from 'src/app/services/get-items.service';
import { EventsService } from 'src/app/services/events.service';
import { SendMessageService } from 'src/app/services/send-message.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent {

  typeProdArr: Products[] = []

  subscribe: Subscription

  productName: any;
  product: any = {
    product: ''
  }
  productType: string

  source: string
  isLoad: boolean = false
  isClicked: boolean = false
  cartMessage: string = 'Adicionar';
  dataId: number

  constructor(private activeRoute: ActivatedRoute,
              private items: getItemsService,
              private router: Router,
              private eventRouter: EventsService,
              private titleService: Title,
              private send: SendMessageService) {}

  ngOnInit() {

    this.eventRouter.routerEvent.emit(false)
    this.productName = this.activeRoute.snapshot.paramMap.get('productName')
    this.setTitlePage(this.productName)


    this.getInfosSubscribe()

    this.subscribe = this.items.sendEvent.subscribe(() => {
      this.isClicked = this.items.verifyCart(this.product._id)
      this.verifyCard()
    })


  }

  getInfosSubscribe() {
    this.subscribe = this.items.getArr()?.subscribe(arr => {
      this.product = arr.filter(({product}) => product === this.productName)[0]

      this.source = `../../../assets/images/${this.product.product}.jpg`;
      this.dataId = this.product._id;

      this.isLoad = true

      this.productType = this.product.type

      this.typeProdArr = arr.filter(prod => prod.type === this.productType)

      this.isClicked = this.items.verifyCart(this.product._id)
      this.verifyCard()
    })
  }

  toggleCart(event: any) {
    this.isClicked = !this.isClicked
    var target = event.target || event.srcElement || event.currentTarget;

    const id = target.getAttribute('data-id');

    this.items.filterItemToCart(id)

    if (this.isClicked) {
      this.cartMessage = 'Remover';
      return;
    }
    this.items.sendEvent.emit()
    this.cartMessage = 'Adicionar';
  }

  verifyCard () {
    if (this.isClicked) {
      this.cartMessage = 'Remover';
      return;
    }

    this.cartMessage = 'Adicionar';
  }

  goToLinkCategory() {
    this.router.navigate([`/products/categoria/${this.productType}`])
  }

  goToLink(event: any) {
    this.router.navigate([`/products`])
    this.isLoad = false
    setTimeout(() => {
      this.router.navigate([`/products/${event.target.dataset.js}`])
    }, 300);
    this.getInfosSubscribe()
  }

  setTitlePage(prod: any) {
    let prodFormated = this.send.formatProduct(prod)
    console.log(prodFormated);

    this.titleService.setTitle(`${prodFormated} - Val Magazine`)
  }

  ngOnDestroy () {
    this.subscribe.unsubscribe()
  }
}

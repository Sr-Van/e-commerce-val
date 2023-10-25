import { Products } from 'src/types/product.interface';
import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { getItemsService } from 'src/app/services/get-items.service';
import { Subscription } from 'rxjs';
import { query } from '@angular/animations';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent {

  subscribe: Subscription

  productName: any;
  product: any = {
    product: ''
  }
  productType: string

  source: string
  isLoad: boolean
  isClicked: boolean = false
  cartMessage: string = 'Adicionar';
  dataId: number

  constructor(private activeRoute: ActivatedRoute,
              private items: getItemsService,
              private router: Router) {}

  ngOnInit() {
    this.productName = this.activeRoute.snapshot.paramMap.get('productName')

    this.subscribe = this.items.getArr()?.subscribe(arr => {
      this.product = arr.filter(({product}) => product === this.productName)[0]
      console.log(this.product);

      this.source = `../../../assets/images/${this.product.product}.jpg`;
      this.dataId = this.product._id;

      this.isLoad = false
      setTimeout(() => {
        this.isLoad = true
      }, 2000);

      this.productType = this.product.type

      this.isClicked = this.items.verifyCart(this.product._id)
      this.verifyCard()
    })

    this.subscribe = this.items.sendEvent.subscribe(() => {
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

  goToLink() {
    this.router.navigate([`/products/categoria/${this.productType}`])
  }

  ngOnDestroy () {
    this.subscribe.unsubscribe()
  }
}

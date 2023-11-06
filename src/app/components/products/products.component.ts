import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { Title } from '@angular/platform-browser';

import { Products } from './../../../types/product.interface';

import { EventsService } from 'src/app/services/events.service';
import { getItemsService } from 'src/app/services/get-items.service';


@Component({
  selector: 'app-Products',
  templateUrl: './Products.component.html',
  styleUrls: ['./Products.component.css'],
})
export class ProductsComponent {

  subscribe: Subscription
  isSelected: boolean = false;
  isLoad: boolean = false

  itemLists: Products[] = [];
  eletronicItems: Products[] = [];
  acessoriesItems: Products[] = [];
  varietyItems: Products[] = [];
  bagItems: Products[] = [];

  constructor(private service: getItemsService,
              private router: Router,
              private eventRouter: EventsService,
              private titleService: Title) {}

  ngOnInit() {

    this.titleService.setTitle('Val Magazine - Tem de tudo!')

    this.subscribe = this.service.getArr()?.subscribe(data => {
      this.itemLists = data

      this.isLoad = true


      this.eventRouter.routerEvent.emit(true)

      this.eletronicItems = data?.filter(prod => prod.type === 'eletronics')
      this.acessoriesItems = data?.filter(prod => prod.type === 'acessories')
      this.varietyItems = data?.filter(prod => prod.type === 'variety')
      this.bagItems = data?.filter(prod => prod.type === 'bags')
    })


  }

  goToLink(event: any) {
    this.router.navigate([`/products/${event.target.dataset.js}`])
  }

  goToLinkCategorie(event: any) {
    this.router.navigate([`/products/categoria/${event.target.dataset.js}`])
  }


  ngOnDestroy () {
    this.subscribe.unsubscribe()
  }
}

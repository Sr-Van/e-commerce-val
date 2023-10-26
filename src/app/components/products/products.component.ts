import { Products } from './../../../types/product.interface';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
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
  isLoad: boolean

  itemLists: Products[] = [];
  eletronicItems: Products[] = [];
  acessoriesItems: Products[] = [];
  varietyItems: Products[] = [];

  constructor(private service: getItemsService,
              private router: Router,
              private eventRouter: EventsService) {}

  ngOnInit() {

    this.subscribe = this.service.getArr()?.subscribe(data => {
      this.itemLists = data

      this.isLoad = false
      setTimeout(() => {
        this.isLoad = true
      }, 2000);


      this.eventRouter.routerEvent.emit(true)

      this.eletronicItems = data?.filter(prod => prod.type === 'eletronics')
      this.acessoriesItems = data?.filter(prod => prod.type === 'acessories')
      this.varietyItems = data?.filter(prod => prod.type === 'variety')
    })


  }

  goToLink(event: any) {
    this.router.navigate([`/products/${event.target.dataset.js}`])
    console.log(event.target.dataset.js)
  }


  ngOnDestroy () {
    this.subscribe.unsubscribe()
  }
}

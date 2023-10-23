import { EventEmitter, Injectable } from '@angular/core';
import { getItemsService } from './get-items.service';
import { products } from 'src/types/product.interface';

import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class GetFilterSearchService {

  arr: products[] = []
  arrFiltered: products[] = []

  filterSearch(searched: string, arr: products[]) {
    console.log(arr, searched);
    this.arrFiltered = arr.filter(( client => {
      return client.product.toLowerCase().includes(searched.toLowerCase())
    }))
    console.log(this.arrFiltered);
    if(this.arrFiltered.length > 0) {
      this.route.navigate(['search'])
      return
    }
    this.route.navigate(['not-found'])
  }

  constructor(private getItem: getItemsService,
              private route: Router) {
    getItem.getArr().subscribe(data => {
      this.arr = data
    })

    this.sendFilterEvent.subscribe(str => {
      this.filterSearch(str, this.arr)
    })
  }

  sendFilterEvent = new EventEmitter<string>()
}

import { EventEmitter, Injectable } from '@angular/core';
import { getItemsService } from './get-items.service';
import { Products } from 'src/types/product.interface';

import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class GetFilterSearchService {

  arr: Products[] = []
  arrFiltered: Products[] = []

  filterSearch(searched: string, arr: Products[]) {
    this.arrFiltered = arr.filter(( client => {
      return client.product.toLowerCase().includes(searched.toLowerCase())
    }))
    if(this.arrFiltered.length > 0) {
      this.route.navigate(['search'])
      return
    }
    this.sendFilterEvent.emit()
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

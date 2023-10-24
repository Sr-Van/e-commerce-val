import { products } from './../../../types/product.interface';
import { Component } from '@angular/core';
import { GetFilterSearchService } from 'src/app/services/get-filter-search.service';
import { getItemsService } from 'src/app/services/get-items.service';


@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent {

  arr: products[] = []
  isLoad: boolean;


  constructor(private getItem: getItemsService,
              private filter: GetFilterSearchService) {


    console.log(this.arr);

    this.filter.sendFilterEvent.subscribe(() => {
      this.ngOnInit()
    })
  }

  ngOnInit() {
    this.arr = this.filter.arrFiltered
    this.isLoad = false
    setTimeout(() => {
      this.isLoad = true
    }, 2000);
  }
}




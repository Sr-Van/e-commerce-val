import { Products } from './../../../types/product.interface';
import { Component } from '@angular/core';
import { Subscription } from 'rxjs';
import { GetFilterSearchService } from 'src/app/services/get-filter-search.service';
import { getItemsService } from 'src/app/services/get-items.service';


@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent {

  arr: Products[] = []
  isLoad: boolean;
  subs: Subscription


  constructor(private getItem: getItemsService,
              private filter: GetFilterSearchService) {


    console.log(this.arr);

    this.subs = this.filter.sendFilterEvent.subscribe(() => {
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


  ngOnDestroy() {
    this.subs.unsubscribe()
  }
}




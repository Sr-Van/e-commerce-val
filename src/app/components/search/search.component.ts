import { Component } from '@angular/core';
import { GetFilterSearchService } from 'src/app/services/get-filter-search.service';
import { getItemsService } from 'src/app/services/get-items.service';
import { products } from 'src/types/product.interface';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent {

  arr: products[] = []


  constructor(private getItem: getItemsService,
              private filter: GetFilterSearchService) {}





}

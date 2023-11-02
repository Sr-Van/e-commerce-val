import { Router } from '@angular/router';
import { Products } from './../../../types/product.interface';
import { Component } from '@angular/core';
import { Subscription } from 'rxjs';
import { GetFilterSearchService } from 'src/app/services/get-filter-search.service';


import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent {

  arr: Products[] = []
  isLoad: boolean;
  subs: Subscription
  searched: string = ''


  constructor(private titleService: Title,
              private filter: GetFilterSearchService,
              private router: Router) {

    this.subs = this.filter.sendFilterEvent.subscribe(() => {
      this.ngOnInit()
    })
  }

  ngOnInit() {
    this.searched = this.filter.searchString

    this.titleService.setTitle(`${this.searched} - Val magazine`)
    console.log(this.searched);


    this.arr = this.filter.arrFiltered
    this.isLoad = false
    setTimeout(() => {
      this.isLoad = true
    }, 2000);

    if(this.arr.length === 0) {
      this.router.navigate(['not-found'])
    }
  }


  ngOnDestroy() {
    this.subs.unsubscribe()
  }
}




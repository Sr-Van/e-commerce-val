import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { EventsService } from 'src/app/services/events.service';
import { getItemsService } from 'src/app/services/get-items.service';
import { Products } from 'src/types/product.interface';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css']
})
export class CategoriesComponent {

  category: any
  subscribe: Subscription
  categoryItems: Products[] = []

  isLoad: boolean = false


  constructor(private active: ActivatedRoute,
              private service: getItemsService,
              private routerEvent: EventsService) {}

  ngOnInit() {
    this.category = this.active.snapshot.paramMap.get('cat')

    this.subscribe = this.service.getArr()?.subscribe(data => {

      this.isLoad = true

      this.categoryItems = data.filter(({type}) => type === this.category)
    })

  this.routerEvent.routerEvent.emit(false)

  }

  filterCategory(filter: string) {

    this.categoryItems = this.categoryItems.filter(( prod => {
      return prod.product.toLowerCase().includes(filter.toLowerCase())
    }))

    if(filter.length === 0) {
      this.ngOnInit()
    }

    if(this.categoryItems.length < 1) {
      this.ngOnInit()
    }
  }

}

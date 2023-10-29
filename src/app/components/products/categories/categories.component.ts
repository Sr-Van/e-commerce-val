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

      setTimeout(() => {
        this.isLoad = true
      }, 2000);

      this.categoryItems = data.filter(({type}) => type === this.category)
    })

  this.routerEvent.routerEvent.emit(false)

  }

}

import { Component } from '@angular/core';
import { getItemsService } from './services/get-items.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'ecommerce';

  itemLists: object[] = [];

  constructor(private service: getItemsService) {}

  ngOnInit() {
    this.itemLists = this.service.getArr();
  }
}

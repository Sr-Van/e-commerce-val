import { Component } from '@angular/core';
import { RenderService } from './services/render.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ecommerce';

  itemLists: object[] = []

  constructor(private render: RenderService) {

  }

  ngOnInit() {
    this.itemLists = this.render.getArr()
  }
}

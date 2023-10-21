import { Component } from '@angular/core';
import { RenderService } from 'src/app/services/render.service';
import { Input } from '@angular/core';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent {
  mybtn: HTMLElement;

  isSelected: boolean = false

  itemLists: object[]

  constructor(private render: RenderService) {

  }

  ngOnInit () {
    this.itemLists = this.render.getArr()
  }



}

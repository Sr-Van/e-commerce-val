import { products } from './../../../types/product.interface';
import { Component } from '@angular/core';
import { getItemsService } from 'src/app/services/get-items.service';
import { Input } from '@angular/core';


@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css'],
})
export class ProductsComponent {
  mybtn: HTMLElement;

  isSelected: boolean = false;
  isEletro: boolean = false;

  itemLists: products[] = [];
  eletronicItems: products[] = [];
  acessoriesItems: products[] = [];
  varietyItems: products[] = [];

  constructor(private service: getItemsService) {}

  ngOnInit() {
    this.service.getArr()?.subscribe(data => {
      this.itemLists = data
      this.eletronicItems = data?.filter(prod => prod.type === 'eletronics')
      this.acessoriesItems = data?.filter(prod => prod.type === 'acessories')
      this.varietyItems = data?.filter(prod => prod.type === 'variety')
    })
  }


}

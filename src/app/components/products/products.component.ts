import { Products } from './../../../types/product.interface';
import { Component } from '@angular/core';
import { getItemsService } from 'src/app/services/get-items.service';


@Component({
  selector: 'app-Products',
  templateUrl: './Products.component.html',
  styleUrls: ['./Products.component.css'],
})
export class ProductsComponent {
  mybtn: HTMLElement;

  isSelected: boolean = false;
  isLoad: boolean = false;

  itemLists: Products[] = [];
  eletronicItems: Products[] = [];
  acessoriesItems: Products[] = [];
  varietyItems: Products[] = [];

  constructor(private service: getItemsService) {}

  ngOnInit() {
    this.service.getArr()?.subscribe(data => {
      this.itemLists = data
      setTimeout(() => {
        this.isLoad = true
      }, 2000);
      this.eletronicItems = data?.filter(prod => prod.type === 'eletronics')
      this.acessoriesItems = data?.filter(prod => prod.type === 'acessories')
      this.varietyItems = data?.filter(prod => prod.type === 'variety')
    })
  }


}

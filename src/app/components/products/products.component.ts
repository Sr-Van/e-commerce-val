import { Component } from '@angular/core';
import { getItemsService } from 'src/app/services/get-items.service';
import { Input } from '@angular/core';
import { products } from 'src/types/product.interface';

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

  constructor(private service: getItemsService) {}

  ngOnInit() {
    this.service.getArr().subscribe(data => {
      this.itemLists = data
    }
    )

  }

  verifyType(obj: any) {
    if (obj.type === 'eletronics') {
      return true;
    }

    return false;
  }
}

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

  itemLists: object[];

  constructor(private service: getItemsService) {}

  ngOnInit() {
    this.itemLists = this.service.getArr();
  }

  verifyType(obj: any) {
    if (obj.type === 'acessories') {
      return true;
    }

    return false;
  }
}

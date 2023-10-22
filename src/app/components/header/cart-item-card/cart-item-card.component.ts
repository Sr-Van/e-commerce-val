import { Component, Input } from '@angular/core';
import { getItemsService } from 'src/app/services/get-items.service';
import { products } from 'src/types/product.interface';

@Component({
  selector: 'app-cart-item-card',
  templateUrl: './cart-item-card.component.html',
  styleUrls: ['./cart-item-card.component.css']
})
export class CartItemCardComponent {

  @Input() item: any
  dataId: number;
  items: products[] = []


  source: string

  ngOnInit() {
    this.source = `../../../assets/images/${this.item.product}.jpg`;

    this.dataId = this.item._id


    this.items = this.service.cart

  }


  constructor(private service: getItemsService) {

  }

  deleteItem(event: any) {

    const id = event.target.getAttribute('data-id')

    console.log(id);


    const indexToDelete = this.items
      .map(prod => prod._id)
      .indexOf(id)


    console.log(indexToDelete);


    this.service.deleteItem(indexToDelete)
  }

}

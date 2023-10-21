import { Component, Input } from '@angular/core';
import { getItemsService } from 'src/app/services/get-items.service';

@Component({
  selector: 'app-cart-item-card',
  templateUrl: './cart-item-card.component.html',
  styleUrls: ['./cart-item-card.component.css']
})
export class CartItemCardComponent {

  @Input() item: any



  source: string

  ngOnInit() {
    this.source = `../../../assets/images/${this.item.product}.jpg`;

  }


  constructor(private service: getItemsService) {

  }

}

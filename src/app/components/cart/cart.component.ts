import { Component } from '@angular/core';
import { Subscription } from 'rxjs';
import { getItemsService } from 'src/app/services/get-items.service';
import { SendMessageService } from 'src/app/services/send-message.service';

import { Products } from 'src/types/product.interface';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent {
  cartList: Products[]
  totalPrice: number
  subs: Subscription

  constructor(private message: SendMessageService,
              private getItem: getItemsService){}


  ngOnInit() {

    this.getItem.getDb()

    this.cartList = this.getItem.cart
    this.totalPrice = this.getItem.getCartPrice(this.cartList)

    console.log(this.cartList);


    this.subs = this.getItem.sendEvent.subscribe(() => {
      this.cartList = this.getItem.cart

      this.totalPrice = this.getItem.getCartPrice(this.cartList)

    })
  }


  sendRequest() {
    this.message.filterArrayProducts(this.cartList)
  }
}

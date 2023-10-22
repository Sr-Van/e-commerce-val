import { style } from '@angular/animations';
import { Component, ViewChild } from '@angular/core';
import { getItemsService } from 'src/app/services/get-items.service';
import { products } from 'src/types/product.interface';

const menuBtn = document.querySelector('.fa-bars')
const menuList = document.querySelector('.navbar-nav')

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {


  @ViewChild('menuList') private myMenu: any;

  source: string;
  cartList: products[]
  lengthCart: number = 0

  isMenuOpen: boolean = false

  constructor(private service: getItemsService) {}
  totalPrice: number


  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen
  }

  ngOnInit() {
    this.service.getDb()

    this.cartList = this.service.cart
    console.log(this.cartList);
    this.lengthCart = this.cartList?.length

    this.service.sendEvent.subscribe(() => {
      this.cartList = this.service.cart

      console.log('cartlist enviado', this.cartList);

      this.totalPrice = this.service.getCartPrice(this.cartList)
      this.lengthCart = this.cartList?.length
    })
  }

  ngOnDestroy () {
    this.service.sendEvent.unsubscribe()
  }


}

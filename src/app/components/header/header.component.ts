import { style } from '@angular/animations';
import { Component, ViewChild } from '@angular/core';
import { getItemsService } from 'src/app/services/get-items.service';

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
  cartList: object[]

  isMenuOpen: boolean = false

  constructor(private service: getItemsService) {}
  totalPrice: number


  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen
  }

  ngOnInit() {
    this.service.getCartList()
    this.cartList = this.service.cart
    console.log(this.cartList);
    this.totalPrice = this.service.getCartPrice()

    this.service.sendEvent.subscribe(() => this.totalPrice = this.service.getCartPrice())
  }

  ngOnDestroy () {
    this.service.sendEvent.unsubscribe()
  }


}

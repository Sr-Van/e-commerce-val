import { Component, ElementRef, ViewChild } from '@angular/core';
import { getItemsService } from 'src/app/services/get-items.service';
import { SendMessageService } from 'src/app/services/send-message.service';
import { products } from 'src/types/product.interface';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {

  source: string;
  cartList: products[]
  lengthCart: number = 0

  isMenuOpen: boolean = false

  constructor(private service: getItemsService,
              private message: SendMessageService) {}
  totalPrice: number


  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen
  }

  ngOnInit() {
    this.service.getDb()

    this.cartList = this.service.cart
    this.lengthCart = this.cartList?.length
    this.totalPrice = this.service.getCartPrice(this.cartList)

    this.service.sendEvent.subscribe(() => {
      this.cartList = this.service.cart

      this.totalPrice = this.service.getCartPrice(this.cartList)
      this.lengthCart = this.cartList?.length
    })
  }

  ngOnDestroy () {
    this.service.sendEvent.unsubscribe()
  }

  sendRequest() {
    this.message.filterArrayProducts(this.cartList)
  }

  showDropdown(el: any) {
    console.log('entrou');

    el.dataset.js = 'opened'
  }
  closeDropdown(el: any, child:any) {
    console.log('saiu');

    setTimeout(() => {
      if(child.dataset.js === 'hovered') {return}
        el.dataset.js = 'closed'
    }, 300);
  }

  activeHover(el: any) {
    console.log('entrou');

    el.dataset.js = 'hovered'
  }

  deactiveHover(el: any, father:any) {
    console.log('saiu');
console.log(father);

    father.dataset.js = 'closed'
    el.dataset.js = 'nohovered'
  }

}

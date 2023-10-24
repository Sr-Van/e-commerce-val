import { Component, EventEmitter } from '@angular/core';
import { Subscription } from 'rxjs';
import { GetFilterSearchService } from 'src/app/services/get-filter-search.service';
import { getItemsService } from 'src/app/services/get-items.service';
import { SendMessageService } from 'src/app/services/send-message.service';
import { Products } from 'src/types/product.interface';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {

  source: string;
  cartList: Products[]
  lengthCart: number = 0
  totalPrice: number

  isMenuOpen: boolean = false
  isOnRoute: boolean = true

  subscribe: Subscription

  menuEvent = new EventEmitter<boolean>()

  constructor(private service: getItemsService,
              private message: SendMessageService,
              private filter: GetFilterSearchService) {
                this.menuEvent.subscribe(bool => this.isMenuOpen = bool)
              }




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
    this.menuEvent.unsubscribe()
    this.subscribe.unsubscribe()
  }

  sendRequest() {
    this.message.filterArrayProducts(this.cartList)
  }

  showDropdown(el: any) {
    el.dataset.js = 'opened'
  }
  closeDropdown(el: any, child:any) {
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


  scrollToId(el: any) {
    (document.getElementById(el) as HTMLElement).scrollIntoView({behavior: "smooth", block: "start", inline: "nearest"});

    this.menuEvent.emit(false)
  }

  sendFilter(target: any) {
    let string = target.value
    console.log(target.value);

    target.value = ''
    this.filter.sendFilterEvent.emit(string)
  }

}

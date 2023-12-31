import { Component, EventEmitter, Output } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { EventsService } from 'src/app/services/events.service';
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
  eventSearch: Subscription
  routeSubs: Subscription


  typeList: any[] = ['acessories', 'bags', 'eletronics', 'variety']

  menuEvent = new EventEmitter<boolean>()

  constructor(private service: getItemsService,
              private message: SendMessageService,
              private filter: GetFilterSearchService,
              private event: EventsService,
              private router: Router) {
                this.menuEvent.subscribe(bool => this.isMenuOpen = bool)
              }





  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen
  }

  ngOnInit() {
    this.service.getDb()

    this.lengthCart = this.service.cart.length

    this.subscribe = this.service.sendEvent.subscribe(() => {

      this.lengthCart = this.service.cart.length
    })


    this.routeSubs = this.event.routerEvent.subscribe(data => this.isOnRoute = data)
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
    el.dataset.js = 'hovered'
  }

  deactiveHover(el: any, father:any) {
    father.dataset.js = 'closed'
    el.dataset.js = 'nohovered'
  }

  emitEvent() {
    this.event.routerEvent.emit(false)
  }


  scrollToId(el: any) {
    (document.getElementById(el) as HTMLElement).scrollIntoView({behavior: "smooth", block: "start", inline: "nearest"});

    this.menuEvent.emit(false)
  }

  sendFilter(target: any) {
    this.isMenuOpen = !this.isMenuOpen
    let string = target.value
    target.value = ''
    this.filter.sendFilterEvent.emit(string)
  }

  goToLinkCategory(event: any) {
    let category = event.target.dataset.js

    setTimeout(() => {
      this.router.navigate([`/products/categoria/${category}`])
    }, 100);

    this.router.navigate([`/products/`])
  }

  goToLink(str: string) {
    this.router.navigate([`/${str}`])
  }

}

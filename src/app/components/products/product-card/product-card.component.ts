import { Component, Input } from '@angular/core';
import { getItemsService } from 'src/app/services/get-items.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.css'],
})
export class ProductCardComponent {
  @Input('theCard') card: any;

  source: string;
  dataId: number;
  isClicked: boolean = false

  subscribe: Subscription

  productName: any;
  product: any = {
    product: ''
  }
  isLoad: boolean
  cartMessage: string = 'Adicionar';


  constructor(private service: getItemsService) {

  }

  ngOnInit() {

      this.source = `../../../assets/images/${this.card.product}.jpg`;
      this.dataId = this.card._id;

      this.isLoad = false
      setTimeout(() => {
        this.isLoad = true
      }, 2000);

      this.isClicked = this.service.verifyCart(this.card._id)
      this.verifyCard()


    this.subscribe = this.service.sendEvent.subscribe(() => {
      this.isClicked = this.service.verifyCart(this.card._id)
      this.verifyCard()
    })


  }

  toggleCart(event: any) {
    this.isClicked = !this.isClicked
    var target = event.target || event.srcElement || event.currentTarget;

    const id = target.getAttribute('data-id');

    this.service.filterItemToCart(id)

    if (this.isClicked) {
      this.cartMessage = 'Remover';
      return;
    }
    this.service.sendEvent.emit()
    this.cartMessage = 'Adicionar';
  }

  verifyCard () {
    if (this.isClicked) {
      this.cartMessage = 'Remover';
      return;
    }

    this.cartMessage = 'Adicionar';
  }

  ngOnDestroy () {
    this.subscribe.unsubscribe()
  }
}

import { Component, Input, Output, EventEmitter } from '@angular/core';
import { getItemsService } from 'src/app/services/get-items.service';

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

  cartMessage: string = 'Adicionar';

  ngOnInit() {
    this.source = `../../../assets/images/${this.card.product}.jpg`;
    this.dataId = this.card._id;
    this.isClicked = this.service.verifyCart(this.card._id)
    this.verifyCard()


    this.service.sendEvent.subscribe(() => {
      this.isClicked = this.service.verifyCart(this.card._id)
      this.verifyCard()
    })
  }

  toggleCart(event: any) {
    this.isClicked = !this.isClicked
    var target = event.target || event.srcElement || event.currentTarget;

    const id = target.getAttribute('data-id');
    console.log('on toggle cart event');

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
      console.log('isclicked?', this.isClicked);

      this.cartMessage = 'Remover';
      return;
    }

    this.cartMessage = 'Adicionar';
  }


  constructor(private service: getItemsService) {

  }
}

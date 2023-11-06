import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { getItemsService } from 'src/app/services/get-items.service';
import { Products } from 'src/types/product.interface';

@Component({
  selector: 'app-cart-item-card',
  templateUrl: './cart-item-card.component.html',
  styleUrls: ['./cart-item-card.component.css']
})
export class CartItemCardComponent {

  @Input() item: any
  dataId: number;
  items: Products[] = []


  source: string

  ngOnInit() {
    this.source = `../../../assets/images/${this.item.product}.jpg`;

    this.dataId = this.item._id


    this.items = this.service.cart

  }


  constructor(private service: getItemsService,
              private router: Router) {

  }

  deleteItem(event: any) {

    const id = event.target.getAttribute('data-id')



    const indexToDelete = this.items
      .map(prod => prod._id)
      .indexOf(id)

    this.service.deleteItem(indexToDelete)
    this.service.sendEvent.emit()
  }


  goToLink() {
    this.router.navigate([`/products/categoria/${this.item.type}`])
  }

}

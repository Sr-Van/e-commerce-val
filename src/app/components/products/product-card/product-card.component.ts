import { Component, Input } from '@angular/core';
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

  ngOnInit() {
    this.source = `../../../assets/images/${this.card.product}.jpg`;

  }

  constructor(private service: getItemsService) {

  }
}

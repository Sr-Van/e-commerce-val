import { Products } from 'src/types/product.interface';
import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { getItemsService } from 'src/app/services/get-items.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent {

  productName: any;
  product: any = {
    product: ''
  }
  source: string
  isLoad: boolean

  constructor(private activeRoute: ActivatedRoute,
              private items: getItemsService) {}

  ngOnInit() {
    this.productName = this.activeRoute.snapshot.paramMap.get('productName')

    this.items.getArr()?.subscribe(arr => {
      this.product = arr.filter(({product}) => product === this.productName)[0]
      console.log(this.product);

      this.source = `../../../assets/images/${this.product.product}.jpg`;
    })

    this.isLoad = false
    setTimeout(() => {
      this.isLoad = true
    }, 2000);
  }
}

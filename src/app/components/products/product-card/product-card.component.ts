import { Component, Input } from '@angular/core';
import { RenderService } from 'src/app/services/render.service';



@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.css']
})
export class ProductCardComponent {

  @Input('theCard') card: any

  source: string = ``

  constructor(private render: RenderService) {
  }

  ngOnInit() {
    this.source = `../../../assets/images/${this.card.product}.jpg`
  }



  addToCart(event: any) {
    console.log(event.getAttribute('data-id'));
    const id = event.getAttribute('data-id')

    const button = document.querySelector(`[data-id='${id}']`)
    button?.classList.toggle('btn-success')
    button?.classList.toggle('btn-primary')
  }
}

import { EventEmitter, Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { products } from 'src/types/product.interface';


@Injectable({
  providedIn: 'root'
})
export class getItemsService{

  readonly url: string = 'https://my-api-six-beta.vercel.app/products'

  cart: products[] = []
  cartTotalPrice: number = 0

  getArr(): Observable<products[]> {
    return this.http.get<products[]>(this.url)
  }

  verifyCart(item: any) {
    const arr = this.cart?.filter(prod => prod._id == item)


    if(arr?.length >= 1) {
      return true
    }
    return false
  }

  filterItemToCart(item: any) {
    const productIsOnCart = this.cart?.filter(prod => prod._id == item)[0]


    if(productIsOnCart) {
      const indexToDelete = this.cart
        .map(prod => prod._id)
        .indexOf(item)
      this.deleteItem(indexToDelete)
      console.log('produto ja esta no carrinho', indexToDelete);
      console.log('novo carrinho', this.cart);

      return
    }

    this.getArr().subscribe(data => {
      this.cart.push(data.filter(prod => prod._id == item)[0])
      this.getCartPrice(this.cart)
      this.sendEvent.emit()
      this.setDb()
    })
  }

  constructor(private http: HttpClient) { }

  setDb() {
    localStorage.setItem("cart", JSON.stringify(this.cart))
  }

  getDb() :any {
      if(localStorage['cart']) {
        console.log('pegou');
        this.cart = JSON.parse(localStorage.getItem('cart') || '')
        return
      }
      this.setDb()
      return
  }

  deleteItem(index: number) {
    this.cart.splice(index, 1)
    this.setDb()
  }


  getCartList() {
    this.cart = this.getDb()
  }


  getCartPrice (cart: products[]) {
    console.log(cart);

    return cart.reduce((accumulator, {price}) => accumulator + parseFloat(price), 0) || 0
  }

  sendEvent: EventEmitter<any> = new EventEmitter()


}

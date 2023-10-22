import { EventEmitter, Injectable, OnInit } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import { products } from 'src/types/product.interface';


@Injectable({
  providedIn: 'root'
})
export class getItemsService{

  readonly url: string = 'https://my-api-six-beta.vercel.app/products'

  cart: any[] = []

  getArr(): Observable<products[]> {
    return this.http.get<products[]>(this.url)
  }

  verifyCart(item: any) {
    const arr = this.cart.filter(prod => prod._id == item)


    if(arr.length >= 1) {
      return true
    }
    return false
  }

  filterItemToCart(item: any) {
    /* const received = this.getArr().subscribe(data => {
      return data.filter(prod => prod._id == item)[0]
    }) */

    const productIsOnCart = this.cart.filter(prod => prod._id == item)[0]


    if(productIsOnCart) {
      const indexToDelete = this.cart
        .map(prod => prod._id)
        .indexOf(item)
      this.deleteItem(indexToDelete)
      console.log('produto ja esta no carrinho', indexToDelete);
      console.log('novo carrinho', this.cart);

      return
    }
    /* this.cart.push(received) */

    this.setDb()
  }

  constructor(private http: HttpClient) { }

  setDb() {
    console.log('db seted');

    localStorage.setItem("cart", JSON.stringify(this.cart))
  }

  getDb() {
    return JSON.parse(localStorage.getItem('cart') || '')
  }

  deleteItem(index: number) {
    this.cart.splice(index, 1)
    this.setDb()
  }


  getCartList() {
    this.cart = this.getDb()
  }


  getCartPrice () {
    return this.cart.reduce((accumulator, {price}) => accumulator + parseFloat(price), 0)
  }

  sendEvent = new EventEmitter()


}

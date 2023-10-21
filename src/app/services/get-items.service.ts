import { EventEmitter, Injectable, OnInit } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class getItemsService{

  cart: any[] = []

  getArr() {
    return [{"_id":"65295e9955c087a90cd6cf96","product":"usb_hub","price":"20,00","type":"eletronics"},{"_id":"6529622355c087a90cd6cf9b","product":"garrafa_dagua","price":"20","type":"acessories"},{"_id":"6529629655c087a90cd6cf9c","product":"kit_manicure_tesoura","price":"20","type":"acessories"},{"_id":"6529631c55c087a90cd6cf9d","product":"fone_ouvido_cabeca","price":"15","type":"acessories"},{"_id":"6529636f55c087a90cd6cf9e","product":"fone_earpods","price":"15","type":"acessories"}]
  }

  verifyCart(item: any) {
    const arr = this.cart.filter(prod => prod._id == item)


    if(arr.length >= 1) {
      return true
    }
    return false
  }

  filterItemToCart(item: any) {
    const received = this.getArr().filter(prod => prod._id == item)[0]

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
    this.cart.push(received)

    this.setDb()
  }

  constructor() { }

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

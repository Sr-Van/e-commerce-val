import { products } from './../../types/product.interface';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SendMessageService {

  private text: string;
  #number:number = 557996441437

  constructor() { }

  filterArrayProducts (arr: products[]) {
    let str = ''
    //const arrFiltered = arr.map(item => item.product)

    arr.forEach(({ product, price }) => {
      str += ` *${this.formatProduct(product)}* no valor de *R$${price},00* ,`
    })

    const totalPrice  = arr
      .reduce((accumulator, {price}) => accumulator + parseFloat(price), 0)

    this.text = `Olá, fiz um pedido no seu site com os produtos: ${str} o valor total do pedido foi *R$${totalPrice},00* gostaria de saber quais estão disponiveis para fazer a compra!`

    this.send(this.text)

  }

  send(text: string) {
    const url = `https://wa.me//${this.#number}?text=${text}`

    window.open(url, '_blank')
  }

  formatProduct (value: any) {
    let palavras = value.split(' ')

    let result = ''

    palavras.forEach((palavra: string) => {
      palavra.split('').forEach(letra => {
        if(letra === "_") {
          return result += " "
        }
        return result += letra
      })
    })

    return result;
  }
}

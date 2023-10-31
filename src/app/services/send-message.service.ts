import { Products } from './../../types/product.interface';
import { CookieService } from 'ngx-cookie-service';
import { HttpClient } from '@angular/common/http';

import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SendMessageService {

  private text: string;
  #number:number = 557996441437
  #url: string = 'https://my-api-six-beta.vercel.app/new-register'
  #urlVisit: string = 'https://my-api-six-beta.vercel.app/new-visit'

  userConsented: boolean = this.cookies.get('userConsented') === 'true';

  //add userconsented cookie policy

  constructor(private cookies: CookieService,
              private http: HttpClient) { }

  filterArrayProducts (arr: Products[]) {
    let str = ''
    let productsToCookies = ''

    arr.forEach(({ product, price }) => {
      productsToCookies += ' ' + product
      str += ` *${this.formatProduct(product)}* no valor de *R$${price},00* ,`
    })

    const totalPrice  = arr
      .reduce((accumulator, {price}) => accumulator + parseFloat(price), 0)

    this.text = `Olá, fiz um pedido no seu site com os produtos: ${str} o valor total do pedido foi *R$${totalPrice},00* gostaria de saber quais estão disponiveis para fazer a compra!`

    this.sendMethods(productsToCookies)


  }

  sendMethods(prod: string) {
    if(this.userConsented) {
      this.cookies.set('pedido', prod);
    }

    const data = {
      title: 'client',
      pedido: this.cookies.get('pedido')
    }


    this.http.post(this.#url, data).subscribe(
        (response) => {
          console.log('Ordem enviada com sucesso.', response);
        },
        (error) => {
          console.error('Erro ao enviar a ordem.', error);
        }
      )
    this.send(this.text)


  }

  sendVistCookie() {
    if(this.userConsented) {
      const data = {
        title: 'new visit',
        visit: this.cookies.get('visited')
      }


      /* this.http.post(this.#urlVisit, data).subscribe(
          (response) => {
            console.log('visita adicionada', response);
          },
          (error) => {
            console.error('Erro ao enviar a visita.', error);
          }
        ) */
    }
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

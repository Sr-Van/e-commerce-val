import { Products } from './../../types/product.interface';
import { CookieService } from 'ngx-cookie-service';
import { HttpClient } from '@angular/common/http';

import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SendMessageService {

  public date = new Date ()

  private text: string;
  #number:number = 557996441437
  #url: string = 'https://my-api-six-beta.vercel.app/new-register'
  #urlVisit: string = 'https://my-api-six-beta.vercel.app/new-visit'

  userConsented: boolean = this.cookies.get('userConsented') === 'true';

  //add userconsented cookie policy

  constructor(private cookies: CookieService,
              private http: HttpClient) { }

  filterArrayProducts (arr: Products[], addres: any) {

    let str = ''
    let productsToCookies = ''

    arr.forEach(({ product, price }) => {
      productsToCookies += ' ' + product
      str += `${this.formatString(product)}: *R$${price},00* %0A`
    })

    const totalPrice  = arr
      .reduce((accumulator, {price}) => accumulator + parseFloat(price), 0)

    this.text = `Olá, fiz um pedido no seu site com os produtos:
    %0A %0A${str}Valor total: *R$${totalPrice},00*
    %0A %0AEndereço:
    %0A %0ARua ${this.formatString(addres.rua)}, ${this.formatString(addres.numero)}, ${this.formatString(addres.bairro)}, ${this.formatString(addres.comp)}
    %0A %0AGostaria de saber quais estão disponiveis para fazer a compra!`

    this.sendMethods(productsToCookies)


  }

  sendMethods(prod: string) {
    this.userConsented = this.cookies.get('userConsented') === 'true'

    if(this.userConsented) {
      this.cookies.set('pedido', prod);
    }

    const data = {
      title: 'client',
      pedido: this.cookies.get('pedido'),
      data: this.date
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
        visit: this.cookies.get('visited'),
        date: this.date
      }


      this.http.post(this.#urlVisit, data).subscribe(
          (response) => {
            console.log('visita adicionada', response);
          },
          (error) => {
            console.error('Erro ao enviar a visita.', error);
          }
        )
    }
  }

  send(text: string) {
    const url = `https://wa.me//${this.#number}?text=${text}`

    window.open(url, '_blank')
  }

  formatString (value: any) {
    let palavras = value.split('')

    let result = ''

    palavras.forEach((palavra: string) => {
      palavra.split('').forEach(letra => {
        if(letra === "_") {
          return result += " "
        }
        return result += letra
      })
    })

    return result[0].toUpperCase() + result.substr(1).toLowerCase();;
  }
}

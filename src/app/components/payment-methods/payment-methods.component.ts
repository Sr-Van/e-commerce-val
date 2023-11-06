import { Component } from '@angular/core';

@Component({
  selector: 'app-payment-methods',
  templateUrl: './payment-methods.component.html',
  styleUrls: ['./payment-methods.component.css']
})
export class PaymentMethodsComponent {

  payments: any = [
    {metodo: 'À vista',
    texto: 'Pagamento rápido',
    icone: 'fa-solid fa-dollar-sign'},
    {metodo: 'Cartão de crédito',
    texto: 'ate 2x sem juros a partir de R$100',
    icone: 'fa-solid fa-credit-card'},
    {metodo: 'Via PIX',
    texto: 'Pagamento rápido e seguro',
    icone: 'fa-brands fa-pix'},
    {metodo: 'Boleto Bancário',
    texto: 'Segurança da lotérica',
    icone: 'fa-solid fa-landmark'}
  ]

}

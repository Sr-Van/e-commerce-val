import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RenderService {

  getArr() {
    return [
      {
        product: 'usb_hub',
        price: 20.00,
        type: 'eletronics'},
        {
          product: 'usb_hub_manicure',
          price: 20.00,
          type: 'eletronics'}
    ]
  }

  constructor() { }
}

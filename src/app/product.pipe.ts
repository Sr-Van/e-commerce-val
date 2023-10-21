import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'product'
})
export class ProductPipe implements PipeTransform {

  transform(value: string, ...args: unknown[]): unknown {
    let palavras = value.split(' ')

    let result = ''

    palavras.forEach(palavra => {
      palavra.split('').forEach(letra => {
        if(letra === "_") {
          return result += " "
        }
        return result += letra
      })
    })
    console.log(result);


    return result;
  }
}

import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'translate'
})
export class TranslatePipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): any {
    let result = ''

    if(value === 'acessories') {
      result = 'acessórios'
    }
    if(value === 'eletronics') {
      result = 'eletrônicos'
    }
    if(value === 'variety') {
      result = 'variedades'
    }
    return result
  }

}

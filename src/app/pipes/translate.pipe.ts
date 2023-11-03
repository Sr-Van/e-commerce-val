import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'translate'
})
export class TranslatePipe implements PipeTransform {

  tranlates: any = {
    acessories : 'Acessórios',
    eletronics : 'Eletrônicos',
    variety : 'Variedades',
    bags : 'Bolsas'
  }

  transform(value: any, ...args: unknown[]): any {
    return this.tranlates[value]
  }

}

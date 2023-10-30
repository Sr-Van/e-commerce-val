import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'translate'
})
export class TranslatePipe implements PipeTransform {

  tranlates: any = {
    acessories : 'acessórios',
    eletronics : 'eletrônicos',
    variety : 'variedades',
    bags : 'bolsas'
  }

  transform(value: any, ...args: unknown[]): any {
    return this.tranlates[value]
  }

}

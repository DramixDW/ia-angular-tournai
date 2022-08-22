import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'bingo'
})
export class BingoPipe implements PipeTransform {

  transform(value: string, ...args: unknown[]): unknown {
    if (args.includes(value)) {
        return 'Bingo'
    }
    return value;
  }

}

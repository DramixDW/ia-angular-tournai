import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'summary'
})
export class SummaryPipe implements PipeTransform {

  transform(value: string, ...args: number[]): unknown {
    const maxLength = args[0] ?? 20;
    if (value.length > maxLength) {
      let val = value.slice(0, maxLength);
      value = value.replace(value, val.concat('...'));
    }
    return value;
  }

}

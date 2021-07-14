import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'weight'
})
export class WeightPipe implements PipeTransform {

  transform(value: number): string {
    const stringValue = value.toString();

    const formattedValue = `${stringValue.slice(0, stringValue.length - 1)}.${stringValue.slice(stringValue.length - 1)}`;

    return `${formattedValue} kg`;
  }

  removerFormatacao(value: string) {
    if (!value) {
      return value;
    }
    return parseFloat(value.replace(',', '').slice(0, value.length - 3))
  }

}

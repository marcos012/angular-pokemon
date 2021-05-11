import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'height'
})
export class HeightPipe implements PipeTransform {

  transform(value: number): string {
    const stringValue = value.toString();

    if (stringValue.length === 1) {
      return `0.${stringValue.slice(stringValue.length - 1)} m`;
    }

    const formattedValue = `${stringValue.slice(0, stringValue.length - 1)}.${stringValue.slice(stringValue.length - 1)}`;

    return `${formattedValue} m`;
  }

}

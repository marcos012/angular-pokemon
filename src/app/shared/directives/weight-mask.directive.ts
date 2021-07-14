import { Directive, ElementRef, HostListener, NgZone } from '@angular/core';
import { NgControl } from '@angular/forms';

@Directive({
  selector: '[appWeightMask]'
})
export class WeightMaskDirective {

  constructor(private el: ElementRef) { }

  @HostListener('focus', ['$event'])
  onFocus(event: Event) {
    console.log('focus');
  }

  @HostListener('blur', ['$event'])
  onBlur(event: Event) {
    console.log('blur');
  }

  @HostListener('ngModelChange', ['$event'])
  onModelChange(event) {
    const {value} = this.el.nativeElement;

    this.weightFormat(value);
  }

  weightFormat(weight: string) {


    // let value = weight;
    // const integer = weight.split('.')[0];


    // value = value.replace(/\D/g, "");
    // value = value.replace(/^[0]+/, "");

    // if(value.length <= 3 || !integer) {
    //     if(value.length === 1) value = '0.00' + value;
    //     if(value.length === 2) value = '0.0' + value;
    //     if(value.length === 3) value = '0.' + value;
    // } else {
    //     value = value.replace(/^(\d{1,})(\d{3})$/, "$1.$2.$3");
    // }

    // return value;


    const value = this.el.nativeElement.value.replace(',', '');

    // console.log('value', value);


    // const formattedValue = weight.length > 3
    //   ? `${value.slice(0, value.length - 1)},${value.slice(value.length - 2, value.length - 1)}`
    //   : weight;

    // // return weight.length > 3 ? value.replace(/^(\d{1,})(\d{2})$/, "$1,$2") : weight;
    this.el.nativeElement.value = value.replace(/^(\d{1,})(\d{2})$/, "$1,$2");
  }

}

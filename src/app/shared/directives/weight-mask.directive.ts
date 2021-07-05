import { Directive, ElementRef, HostListener, NgZone } from '@angular/core';
import { NgControl } from '@angular/forms';

@Directive({
  selector: '[appWeightMask]'
})
export class WeightMaskDirective {

  constructor(private el: ElementRef, private zone: NgZone, private control: NgControl) { }

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
    this.weightFormat(this.el.nativeElement.value);
  }

  weightFormat(weight: string) {
    const value = weight.replace(',', '');

    this.el.nativeElement.value = value.replace(/^(\d{1,})(\d{2})$/, "$1,$2");
  }

}

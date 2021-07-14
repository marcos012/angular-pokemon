import { Component, EventEmitter, forwardRef, Input, OnInit, Output } from '@angular/core';
import { ControlValueAccessor, FormControl, NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  selector: 'app-dropdown',
  templateUrl: './dropdown.component.html',
  styleUrls: ['./dropdown.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => DropdownComponent),
      multi: true,
    },
  ],
})
export class DropdownComponent implements OnInit, ControlValueAccessor {
  isDisabled = false;

  @Input() items: any[];
  @Input() selectedValue;
  @Input() classeCss;
  @Input() chave: string;
  @Input() valor: string;
  @Input() label: string;
  @Input() id: string;

  @Output() selectedItem = new EventEmitter();
  propagateChange = (_: any) => {};

  constructor() { }

  ngOnInit(): void {

    console.log(this.selectedValue);

  }

  onTouched = () => { };

  // onChange = (valorSelecionado) => {
  //   console.log('change', valorSelecionado);

  //   this.propagateChange(valorSelecionado);
  //   // this.emitirEventoItemSelecionado(valorSelecionado);
  // }

  selectItem(itemId) {
    console.log(itemId);

    this.propagateChange(itemId);
    this.selectedItem.emit(itemId);
  }

  writeValue(item: any): void {
    this.selectedItem.emit(item);
  }

  registerOnChange(fn: (rating: number) => void): void {
    this.propagateChange = fn;
  }

  registerOnTouched(fn: () => void): void {
    this.onTouched = fn;
  }


  setDisabledState(disabled: boolean): void {
    this.isDisabled = disabled;
  }


}

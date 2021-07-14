import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardComponent } from './components/card/card.component';
import { WeightPipe } from './pipes/weight.pipe';
import { WeightMaskDirective } from './directives/weight-mask.directive';
import { HeightPipe } from './pipes/height.pipe';
import { DropdownComponent } from './components/dropdown/dropdown.component';
import { FormsModule } from '@angular/forms';
import { InputComponent } from './components/input/input.component';

@NgModule({
  declarations: [CardComponent, WeightPipe, WeightMaskDirective, HeightPipe, DropdownComponent, InputComponent],
  imports: [CommonModule, FormsModule],
  exports: [CardComponent, WeightPipe, HeightPipe, WeightMaskDirective, DropdownComponent, InputComponent],
})
export class SharedModule { }

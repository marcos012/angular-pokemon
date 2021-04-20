import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardComponent } from './components/card/card.component';
import { WeightPipe } from './pipes/weight.pipe';
import { WeightMaskDirective } from './directives/weight-mask.directive';

@NgModule({
  declarations: [CardComponent, WeightPipe, WeightMaskDirective],
  imports: [CommonModule],
  exports: [CardComponent, WeightPipe, WeightMaskDirective],
})
export class SharedModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardComponent } from './components/card/card.component';
import { WeightPipe } from './pipes/weight.pipe';
import { WeightMaskDirective } from './directives/weight-mask.directive';
import { HeightPipe } from './pipes/height.pipe';

@NgModule({
  declarations: [CardComponent, WeightPipe, WeightMaskDirective, HeightPipe],
  imports: [CommonModule],
  exports: [CardComponent, WeightPipe, HeightPipe, WeightMaskDirective],
})
export class SharedModule { }

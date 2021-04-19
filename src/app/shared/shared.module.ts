import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardComponent } from './components/card/card.component';
import { WeightPipe } from './pipes/weight.pipe';

@NgModule({
  declarations: [CardComponent, WeightPipe],
  imports: [CommonModule],
  exports: [CardComponent, WeightPipe],
})
export class SharedModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PokemonListComponent } from './components/pokemon-list/pokemon-list.component';
import { PokemonRouting } from './pokemon.routing';
import { RouterModule } from '@angular/router';
import { PokemonServiceHttp } from './services/pokemon.service.http';
import { HttpClientModule } from '@angular/common/http';
import { PokemonDetailComponent } from './components/pokemon-detail/pokemon-detail.component';
import { SharedModule } from '../shared/shared.module';
import { PokemonFormComponent } from './components/pokemon-form/pokemon-form.component';
import { FormBuilder, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { WeightPipe } from '../shared/pipes/weight.pipe';

@NgModule({
  declarations: [PokemonDetailComponent, PokemonListComponent, PokemonFormComponent],
  imports: [
    CommonModule,
    SharedModule,
    HttpClientModule,
    RouterModule,
    PokemonRouting,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [PokemonServiceHttp, FormBuilder, WeightPipe],
  exports: [RouterModule]
})
export class PokemonModule { }

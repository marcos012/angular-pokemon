import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PokemonListComponent } from './components/pokemon-list/pokemon-list.component';
import { PokemonRouting } from './pokemon.routing';
import { RouterModule } from '@angular/router';
import { PokemonServiceHttp } from './services/pokemon.service.http';
import { HttpClientModule } from '@angular/common/http';
import { PokemonDetailComponent } from './components/pokemon-detail/pokemon-detail.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [PokemonDetailComponent, PokemonListComponent],
  imports: [
    CommonModule,
    SharedModule,
    HttpClientModule,
    RouterModule,
    PokemonRouting,
  ],
  providers: [PokemonServiceHttp],
  exports: [RouterModule]
})
export class PokemonModule { }

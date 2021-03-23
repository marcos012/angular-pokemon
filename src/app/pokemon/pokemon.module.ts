import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PokemonListComponent } from './components/pokemon-list/pokemon-list.component';
import { PokemonRouting } from './pokemon.routing';
import { RouterModule } from '@angular/router';
import { PokemonService } from './services/pokemon.service';
import { HttpClientModule } from '@angular/common/http';
import { PokemonDetailComponent } from './components/pokemon-detail/pokemon-detail.component';

@NgModule({
  declarations: [PokemonListComponent, PokemonDetailComponent],
  imports: [
    CommonModule,
    HttpClientModule,
    RouterModule,
    PokemonRouting,
  ],
  providers: [PokemonService],
  exports: [PokemonListComponent, RouterModule]
})
export class PokemonModule { }

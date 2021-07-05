import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PokemonFormComponent } from './components/pokemon-form/pokemon-form.component';
import { PokemonListComponent } from './components/pokemon-list/pokemon-list.component';

const routes: Routes = [
  { path: 'pokemons', component: PokemonListComponent },
  { path: 'pokemons/new', component: PokemonFormComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PokemonRouting { }

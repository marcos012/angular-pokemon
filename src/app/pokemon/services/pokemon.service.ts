import { Injectable, EventEmitter } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';
import { Pokemon } from '../models/pokemon';

@Injectable({
  providedIn: 'root'
})
export class PokemonService {

  previousPokemon;

  public pokemonRestore = new Subject<Pokemon>();
  public pokemonBehavor = new BehaviorSubject<number>(undefined);

  notificarPokemon(pokemonId: number) {
    this.pokemonBehavor.next(pokemonId);
  }

  notificarPokemonRestaurado(pokemon) {
    this.pokemonRestore.next(pokemon);
  }
}

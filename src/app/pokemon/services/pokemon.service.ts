import { Injectable, EventEmitter } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';
import { Pokemon } from '../models/pokemon';

@Injectable({
  providedIn: 'root'
})
export class PokemonService {

  // public pokemonEmitter: EventEmitter<Pokemon> = new EventEmitter();
  public pokemonSubject = new Subject<Pokemon>();
  public pokemonBehavor = new BehaviorSubject<Pokemon>({} as Pokemon);

  notificarPokemon(pokemon: Pokemon) {
    // this.pokemonSubject.next(pokemon);
    this.pokemonBehavor.next(pokemon);
    // this.pokemonEmitter.emit(pokemon);
  }
}

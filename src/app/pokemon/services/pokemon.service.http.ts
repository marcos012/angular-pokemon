import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Pokemon } from '../models/pokemon';

@Injectable({
  providedIn: 'root'
})
export class PokemonServiceHttp {
  constructor(protected http: HttpClient) { }

  getPokemons(): Observable<any> {
    return this.http.get<Pokemon[]>('https://pokeapi.co/api/v2/pokedex/2/');
  }

  getPokemonById(pokemonId: number): Observable<Pokemon> {
    return this.http.get<Pokemon>(`https://pokeapi.co/api/v2/pokemon/${pokemonId}/`);
  }
}

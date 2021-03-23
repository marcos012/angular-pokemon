import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PokemonService {
  constructor(protected http: HttpClient) { }

  getPokemons(): Observable<any> {
    return this.http.get('https://pokeapi.co/api/v2/pokedex/2/');
  }

  getPokemonById(pokemonId: number): Observable<any> {
    return this.http.get(`https://pokeapi.co/api/v2/pokemon/${pokemonId}/`);
  }
}

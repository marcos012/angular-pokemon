import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Pokemon } from '../../models/pokemon';
import { PokemonService } from '../../services/pokemon.service';
import { PokemonServiceHttp } from '../../services/pokemon.service.http';

@Component({
  selector: 'app-pokemon-detail',
  templateUrl: './pokemon-detail.component.html',
  styleUrls: ['./pokemon-detail.component.scss']
})
export class PokemonDetailComponent implements OnInit, OnDestroy{
  pokemon: Pokemon;
  private pokemonSubscription: Subscription;

  constructor(private pokemonService: PokemonService, private pokemonServiceHttp: PokemonServiceHttp) { }

  ngOnInit(): void {
    this.pokemonSubscription = this.pokemonService.pokemonBehavor.subscribe(data => this.getPokemonData(data.id));
  }

  getPokemonData(pokemonId: number) {
    this.pokemonServiceHttp.getPokemonById(pokemonId).subscribe(data => {
      const pokemonTypes = [];
      data.types.forEach(({ type }) => pokemonTypes.push(type.name))

      this.pokemon = new Pokemon(data.name, data.id, data.weight, pokemonTypes, data.height);
    });
  }

  ngOnDestroy(): void {
    this.pokemonSubscription.unsubscribe();
  }

}

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
    this.pokemonSubscription = this.pokemonService.pokemonBehavor.subscribe(data => this.getPokemonData(data));
  }

  getPokemonData(pokemonId: number): void {
    this.pokemonServiceHttp.getPokemonById(pokemonId).subscribe(data => {
      const pokemonTypes = [];
      data.types.forEach(({ type }) => pokemonTypes.push(type.name))

      this.pokemonService.previousPokemon = this.pokemon;
      this.pokemon = new Pokemon(data.name, data.id, data.weight, pokemonTypes, data.height);
    });
  }

  ngOnDestroy(): void {
    this.pokemonSubscription.unsubscribe();
  }

  restorePokemon(): void {
    const { previousPokemon } = this.pokemonService;

    if (!previousPokemon) {
      return;
    }

    // console.log(this.pokemonService.previousPokemon);
    this.pokemonService.notificarPokemonRestaurado(previousPokemon)



    const atualPokemon = this.pokemon;
    this.pokemon = previousPokemon;
    this.pokemonService.previousPokemon = atualPokemon;
  }

}

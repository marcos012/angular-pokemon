import { Component, OnInit } from '@angular/core';
import { Pokemon } from '../../models/pokemon';
import { PokemonService } from '../../services/pokemon.service';
import { PokemonServiceHttp } from '../../services/pokemon.service.http';

@Component({
  selector: 'app-pokemon-list',
  templateUrl: './pokemon-list.component.html',
  styleUrls: ['./pokemon-list.component.scss']
})
export class PokemonListComponent implements OnInit {
  pokemons = [];
  selectedPokemon: Pokemon;

  constructor(private pokemonServiceHttp: PokemonServiceHttp, private pokemonService: PokemonService) { }

  ngOnInit(): void {
    this.pokemonServiceHttp.getPokemons().subscribe(data => {
      data.pokemon_entries.slice(0, 20).forEach((entry) => {
        const { name } = entry.pokemon_species;
        const id = entry.entry_number;

        const pokemon = new Pokemon(name, id, undefined, []);

        this.pokemons.push(pokemon);
      });
    });
  }

  selectPokemon(pokemon: Pokemon): void {
    this.pokemonService.notificarPokemon(pokemon);
    this.selectedPokemon = pokemon;
  }

}

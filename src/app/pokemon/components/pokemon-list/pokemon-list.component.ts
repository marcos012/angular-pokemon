import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Pokemon } from '../../models/pokemon';
import { PokemonService } from '../../services/pokemon.service';

@Component({
  selector: 'app-pokemon-list',
  templateUrl: './pokemon-list.component.html',
  styleUrls: ['./pokemon-list.component.scss']
})
export class PokemonListComponent implements OnInit {
  pokemons = [];

  constructor(private pokemonService: PokemonService, private router: Router) { }

  ngOnInit(): void {
    this.pokemonService.getPokemons().subscribe(data => {
      data.pokemon_entries.forEach((entry) => {
        console.log(entry);

        let pokemon = new Pokemon();
        pokemon.name = entry.pokemon_species.name;
        pokemon.id = entry.entry_number;

        this.pokemons.push(pokemon);
      });
    });
  }

  navigateToDetail(podemonId: number): void {
    this.router.navigate(['pokemons', podemonId]);
  }

}

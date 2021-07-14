import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { UsuarioLogadoService } from '../../../auth/services/usuario-logado.service';
import { Pokemon } from '../../models/pokemon';
import { PokemonService } from '../../services/pokemon.service';
import { PokemonServiceHttp } from '../../services/pokemon.service.http';

@Component({
  selector: 'app-pokemon-list',
  templateUrl: './pokemon-list.component.html',
  styleUrls: ['./pokemon-list.component.scss']
})
export class PokemonListComponent implements OnInit, OnDestroy {
  pokemons = [];

  restoredPokemon;

  pokemonRestoreSubscription: Subscription;
  deveExibirDetalhes = false;

  constructor(
    public usuarioService: UsuarioLogadoService,
    private pokemonService: PokemonService,
    private pokemonServiceHttp: PokemonServiceHttp,
    private router: Router
  ) { }


  ngOnInit(): void {
    this.getPokemons();

    this.pokemonRestoreSubscription = this.pokemonService.pokemonRestore.subscribe(pokemon => {
      console.log(pokemon);
      this.restoredPokemon = undefined
      this.restoredPokemon = pokemon.id
    });
    // this.pokemonRestoreSubscription = this.pokemonService.pokemonRestore.subscribe(pokemon => this.restoredPokemon = pokemon.name);
  }

  ngOnDestroy(): void {
    this.pokemonRestoreSubscription.unsubscribe();
  }

  getPokemons(): void {
    this.pokemonServiceHttp.getPokemons().subscribe(data => {
      data.pokemon_entries.slice(0, 20).forEach((entry) => {
        const { name } = entry.pokemon_species;
        const id = entry.entry_number;

        const pokemon = new Pokemon(name, id, undefined, []);

        this.pokemons.push(pokemon);
      });
    });
  }

  selectPokemon(pokemonId: number): void {
    if (pokemonId.toString() === 'undefined') {
      this.deveExibirDetalhes = false;
      return;
    }

    this.pokemonService.notificarPokemon(pokemonId);
    this.deveExibirDetalhes = true;
    document.documentElement.scrollTop = 0
  }


  navigateToForm() {
    this.router.navigate(['pokemons', 'new']);
  }

  logOut() {
    localStorage.clear();
    this.router.navigate(['login']);
  }
}

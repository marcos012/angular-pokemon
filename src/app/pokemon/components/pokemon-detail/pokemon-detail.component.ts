import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Pokemon } from '../../models/pokemon';
import { PokemonService } from '../../services/pokemon.service';

@Component({
  selector: 'app-pokemon-detail',
  templateUrl: './pokemon-detail.component.html',
  styleUrls: ['./pokemon-detail.component.scss']
})
export class PokemonDetailComponent implements OnInit {
  pokemon = new Pokemon();

  constructor(private pokemonService: PokemonService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    const id = this.route.snapshot.params['id'];

    this.pokemonService.getPokemonById(id).subscribe(data => {
      this.pokemon.name = data.name;
      this.pokemon.id = data.id;
      data.types.forEach((eachType) => {
        this.pokemon.types.push(eachType.type.name);
      });
    })
  }
}

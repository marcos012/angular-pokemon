import { HttpClientModule } from "@angular/common/http";
import { CUSTOM_ELEMENTS_SCHEMA, Injector } from "@angular/core";
import { ComponentFixture, TestBed, async, waitForAsync } from "@angular/core/testing";
import { BrowserDynamicTestingModule, platformBrowserDynamicTesting } from "@angular/platform-browser-dynamic/testing";
import { Router } from "@angular/router";
import { RouterTestingModule } from "@angular/router/testing";
import { Observable, of, Subject } from "rxjs";
import { AuthModule } from "../../../auth/auth.module";
import { SharedModule } from "../../../shared/shared.module";
import { Pokemon } from "../../models/pokemon";
import { PokemonService } from "../../services/pokemon.service";
import { PokemonServiceHttp } from "../../services/pokemon.service.http";
import { PokemonListComponent } from "./pokemon-list.component";
// node '/home/marcos/Desktop/projects/rural-entradas-externas-mobile/node_modules/.bin/jest'

class MockPokemonServiceHttp {
  getPokemons(): Observable<any> {
    return of({
      pokemon_entries: [
        {
          pokemon_species: { name: 'bulbassaur' },
          entry_number: 1
        }
      ]
    });
  }
}

// class MockPokemonService {
//   pokemonRestore: Subject<any>
// }

describe('PokemonListComponent', () => {
  let component: PokemonListComponent;
  let fixture: ComponentFixture<PokemonListComponent>;
  let pokemonServiceHttp: PokemonServiceHttp;
  let pokemonService: PokemonService;
  let router: Router;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ PokemonListComponent ],
      imports: [SharedModule, AuthModule, HttpClientModule, RouterTestingModule],
      providers: [
        Injector,
        { provide: PokemonServiceHttp, useClass: MockPokemonServiceHttp },
        PokemonService
      ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PokemonListComponent);
    component = fixture.componentInstance;
    pokemonServiceHttp = TestBed.inject(PokemonServiceHttp);
    pokemonService = TestBed.inject(PokemonService);
    router = TestBed.inject(Router);

    fixture.detectChanges();
  });

  it('deve consultar pokemons', () => {
    fixture.detectChanges();

    expect(component.pokemons.length).toEqual(1);
    expect(component.pokemons[0].name).toEqual('bulbassaur');
  });

  it('deve conter botão para cadatro de pokemon', () => {
    spyOn(router, 'navigate');
    const button = fixture.nativeElement.querySelector('#new-pokemon');

    button.click();
    fixture.detectChanges();

    expect(router.navigate).toHaveBeenCalledWith([ 'pokemons', 'new']);
  });

  it('deve exibir pokemon selecionado', () => {
    component.selectPokemon(1);
    fixture.detectChanges();

    expect(component.deveExibirDetalhes).toBeTrue();
  });
});

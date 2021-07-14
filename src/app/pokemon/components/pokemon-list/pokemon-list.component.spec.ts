import { HttpClientModule } from "@angular/common/http";
import { CUSTOM_ELEMENTS_SCHEMA, Injector } from "@angular/core";
import { ComponentFixture, TestBed, async, waitForAsync } from "@angular/core/testing";
import { BrowserDynamicTestingModule, platformBrowserDynamicTesting } from "@angular/platform-browser-dynamic/testing";
import { RouterTestingModule } from "@angular/router/testing";
import { AuthModule } from "../../../auth/auth.module";
import { SharedModule } from "../../../shared/shared.module";
import { PokemonService } from "../../services/pokemon.service";
import { PokemonServiceHttp } from "../../services/pokemon.service.http";
import { PokemonListComponent } from "./pokemon-list.component";
// node '/home/marcos/Desktop/projects/rural-entradas-externas-mobile/node_modules/.bin/jest'

describe('PokemonListComponent', () => {
  let component: PokemonListComponent;
  let fixture: ComponentFixture<PokemonListComponent>;
  let pokemonService: PokemonServiceHttp;

  // beforeAll(() => {
  //   TestBed.resetTestEnvironment();
  //   TestBed.initTestEnvironment(BrowserDynamicTestingModule, platformBrowserDynamicTesting());
  // });

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ PokemonListComponent ],
      imports: [SharedModule, AuthModule, HttpClientModule, RouterTestingModule],
      providers: [Injector],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PokemonListComponent);
    component = fixture.componentInstance;
    pokemonService = TestBed.inject(PokemonServiceHttp);
    component.getPokemons = jasmine.createSpy().and.returnValue([]);

    // console.log(spy);

    fixture.autoDetectChanges();
  });

  it('deve consultar pokemons', () => {
    // spyOn(pokemonService, 'getPokemons')

    // const spy = spyOn(component, "getPokemons");

    // preconditions
    // simlute method call
    // assertion

    // it's important to restore an orginal method as next test suite will use mocked version.
    // spy.mockRestore();
    // expect(spy).toBeTruthy();
    expect(component.getPokemons).toHaveBeenCalled();
  });
});

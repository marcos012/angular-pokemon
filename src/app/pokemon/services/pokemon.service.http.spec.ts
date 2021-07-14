import { HttpClient } from '@angular/common/http';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { async, getTestBed, TestBed } from '@angular/core/testing';
import { Pokemon } from '../models/pokemon';
import { PokemonServiceHttp } from './pokemon.service.http';

const mockResponse = {};

describe('PokemonService', () => {
  let injector: TestBed;
  let service: PokemonServiceHttp;
  let httpClient: HttpClient;
  let httpMock: HttpTestingController;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      declarations: []
    }).compileComponents()
    .then(() => {
        injector = getTestBed();
        httpClient = injector.get(HttpClient);
        httpMock = injector.get(HttpTestingController);
        service = injector.get(PokemonServiceHttp);
    });
  }));

  it('should create the app', () => {
    service = new PokemonServiceHttp(httpClient);
    expect(service).toBeTruthy();
  });

  // PRIMEIRO JEITO DE FAZER
  // it(`Dado o SpotifyService
  //     Quando o método searchMusic retornar com sucesso
  //     Então deve retornar as músicas 1`, () => {
  //   let searchMusicResponse;
  //   const musicSearch = "Gorillaz";

  //   spyOn(httpClient,'get').and.returnValue(of(mockResponse));

  //   const params = {q: musicSearch, type: 'track'};
  //   const headers = new HttpHeaders()
  //     .set('Authorization', `Bearer ${service.SPOTIFY_AUTH}`);

  //   service.searchMusic(musicSearch).subscribe((res) => {
  //     searchMusicResponse = res;
  //   });

  //   expect(searchMusicResponse).toEqual(mockResponse);
  //   expect(httpClient.get).toHaveBeenCalledWith('https://api.spotify.com/v1/search', { headers, observe: 'response', params });
  // });

  // SEGUNDO JEITO DE FAZER
  it(`deve consultar todos os pokemons`, () => {
    service.getPokemons().subscribe((res) => {
      expect(res).toEqual(mockResponse);
    });

    const reqMock = httpMock.expectOne((req) => {
      return req.method === 'GET' &&
      req.urlWithParams === `/api/v2/pokedex/2/`
    });

    reqMock.flush(mockResponse);
    httpMock.verify();
  });

  it('deve consultar pokemon por id', () => {
    const retornoPokemon = {id: 1, name: 'teste', weight: 10, height: 10, types: []} as Pokemon;
    service.getPokemonById(1).subscribe((res) => {
      expect(res).toEqual(retornoPokemon);
    });

    const reqMock = httpMock.expectOne((req) => {
      return req.method === 'GET' &&
      req.urlWithParams === `/api/v2/pokemon/1/`
    });

    reqMock.flush(retornoPokemon);
    httpMock.verify();
  });
});

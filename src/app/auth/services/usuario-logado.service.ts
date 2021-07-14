import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UsuarioLogadoService {

  username: string

  constructor() {
    const token = localStorage.getItem('accessToken');
    this.username = token ? token.split(':')[0] : null;
  }
}

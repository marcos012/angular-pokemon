import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { Observable } from 'rxjs';

const AUTH_TOKEN = 'accessToken'

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private router: Router) {}

  canActivate(): Observable<boolean> | boolean {
    const token = window.localStorage.getItem(AUTH_TOKEN);
    if (token) {
      return true;
    }

    this.router.navigate(['/login']);
    return false;
  }

}

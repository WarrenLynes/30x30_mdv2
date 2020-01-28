import { Injectable } from '@angular/core';
import { Credentials } from './credentials';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  isAuthenticated() {
    return localStorage.getItem('TOKEN');
  }

  authenticate({name, password}: Credentials) {
    if(name && password) {
      localStorage.setItem('TOKEN', 'AUTHED');
    } else {
      localStorage.removeItem('TOKEN');
    }
  }

  logout() {
    localStorage.removeItem('TOKEN');
  }
}

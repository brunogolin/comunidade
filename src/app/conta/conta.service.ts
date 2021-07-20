import { Injectable } from '@angular/core';
import Swal from 'sweetalert2';

@Injectable({
  providedIn: 'root'
})
export class ContaService {

  constructor() { }

  login(user: any) {

    console.log(user)

    if (user.email === 'a' && user.password === 'b') {
      return new Promise((resolve) => {
        window.localStorage.setItem('token', 'meu-token');
        resolve(true);
      })
    } else {
      Swal.fire('Oops...','Login e/ou senha inválidos', 'error');
    }
  }

  createAccount(account: any) {
    return new Promise((resolve) => {
      resolve(true);
    })
  }
}

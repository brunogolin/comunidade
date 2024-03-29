import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AutenticacaoGuard implements CanActivate {

  constructor(private router: Router) {}

  canActivate(next: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    const token = window.localStorage.getItem('token');
    if (token)
      return true;
    else {
      this.router.navigate(['login']);
      return false;
    }
  }
  
}

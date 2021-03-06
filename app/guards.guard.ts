import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable, tap } from 'rxjs';
import {AuthService } from './services/auth.service';


@Injectable({
  providedIn: 'root'
})
export class GuardsGuard implements CanActivate {

  constructor(private authService: AuthService, private router: Router) { }
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    return this.isLoggedIn();
  }

  isLoggedIn(): Observable<boolean> {
    return this.authService.isAuth().pipe(
      tap((isLoggedIn) => {
        if(!isLoggedIn) {
          this.router.navigate(['/login'])
        }
      })
    );
  }
  
}

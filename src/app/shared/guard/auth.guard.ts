
// import { Injectable } from '@angular/core';
// import { CanActivate } from '@angular/router';
// import { Router } from '@angular/router';

// @Injectable()
// export class AuthGuard implements CanActivate {

//     constructor(private router: Router) { }

//     canActivate() {
//         if (localStorage.getItem('isLoggedin')) {
//             return true;
//         }

//         this.router.navigate(['/login']);
//         return false;
//     }
// }

import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { AuthService } from './../../auth.service';
import { Injectable } from '@angular/core';


@Injectable()
export class AuthGuard implements CanActivate {

  constructor(private authService: AuthService) {}

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    return this.authService.isAuthenticated();
  }
}

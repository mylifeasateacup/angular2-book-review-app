import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, Router } from '@angular/router';

@Injectable()
export class ProductGuardService implements CanActivate {

  constructor(private _router: Router) { }

  //this guard prevents access to an invalid route and displays an error message, and reroutes user back to product list page
  canActivate(route: ActivatedRouteSnapshot): boolean {
    //+ converts to and from string
    let id = +route.url[1].path;
    //if id is invalid...either 0 or not a number...
    if (isNaN(id) || id < 1) {
      //display error message
      alert("Invalid product Id");
      //send user back to specified page (products)
      this._router.navigate(['/products']);
      //exits
      return false;
    };
    return true;
  }
}

import { Injectable } from "@angular/core";
import { Router, CanActivate } from "@angular/router";
import { Observable } from "rxjs/Observable";
import { AuthService } from "../auth.service";

@Injectable()
export class AdminGuard implements CanActivate {
    constructor(private auth: AuthService, private router: Router) { }

    canActivate(): Observable<boolean> | Promise<boolean> | boolean {
        if (this.auth.isUserInRole("Administrators") && this.auth.isLoggedIn) {
            return true;
        }
        else {
            this.router.navigate(['/AccessDenied']);  
        }        
        return false;
    }
}
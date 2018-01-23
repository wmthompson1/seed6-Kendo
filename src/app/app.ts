import { Component } from '@angular/core';

@Component({
  selector: 'app',
  template: `
    <div>
        <nav class='navbar navbar-default'>
            <div class='container-fluid'>
                <a class='navbar-brand'>{{pageTitle}}</a>
                <ul class='nav navbar-nav'>
                    <li><a [routerLink]="['/welcome']">Home</a></li>
                    <li><a [routerLink]="['/home']">Forms Main Edit</a></li>
                    <li><a [routerLink]="['/formAdd']">Adds Form</a></li>
                   
             
                </ul>
            </div>
        </nav>
        <div class='container'>
            <router-outlet></router-outlet>
        </div>
     </div>
    `
})
export class AppComponent {
  pageTitle: string = 'Design Tester';
}

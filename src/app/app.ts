import { Component } from '@angular/core';

@Component({
  selector: 'app',
  template: `
    <div>
        <nav class='navbar navbar-default'>
            <div class='container-fluid'>
                <a class='navbar-brand'>{{pageTitle}}</a>
                <ul class='nav navbar-nav'>
                    <li><a [routerLink]="['/home']">Home</a></li>
                    <li><a [routerLink]="['/survey-render']">Survey Test</a></li>
                    <li><a [routerLink]="['/home']">Forms Main Edit</a></li>
                    <li><a [routerLink]="['/formAdd']">Adds Form</a></li>
                    <li><a [routerLink]="['/mock-test']">Survey Grid</a></li>
                    <li><a [routerLink]="['/surveyDetails']">Survey Detail</a></li>
                    <li><a [routerLink]="['/surveyQuestions']">Survey Questions</a></li>
                    <li><a [routerLink]="['/user-list']">User List</a></li>
                    
                                 
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

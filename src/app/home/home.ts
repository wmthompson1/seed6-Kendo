import { Component } from '@angular/core';
import { Employee } from '../models/employee.model';
import { Router } from '@angular/router';

import { PublisherService } from '../services/publishers.service'

@Component({
  selector: 'home',
  styleUrls: ['./home.css'],
  templateUrl: './home.html',
  providers: [PublisherService]
})
export class Home {
  languages = ['English', 'Spanish', 'Other'];
  //model = new Employee('Darla', 'Smith');
  model: any = {};
  loading = false;
  hasPrimaryLanguageError = false;

  constructor (
    private router: Router,
    private publisherService: PublisherService,

  ) {
   
  }

  getData() {
    this.loading = true;
    this.publisherService.create(this.model)
        .subscribe(
            data => {
                this.router.navigate(['/login']);
            },
            error => {
                this.loading = false;
            });
}

  // validatePrimaryLanguage(value) {
  //   if (value === 'default')
  //     this.hasPrimaryLanguageError = true;
  //   else
  //     this.hasPrimaryLanguageError = false;
  // }
}

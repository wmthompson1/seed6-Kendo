import { Component, OnInit } from '@angular/core';
import { Employee } from '../models/employee.model';
import { Router } from '@angular/router';

import { PublisherService } from '../services/publishers.service'
import { Publisher } from '../models/publisher';

@Component({
  selector: 'master',
  styleUrls: ['./master.css'],
  templateUrl: './master.html',
  providers: [PublisherService]
})

export class Master implements OnInit {
  languages = ['English', 'Spanish', 'Other'];
  //model = new Employee('Darla', 'Smith');
  model: any = {};
  loading = false;
  hasPrimaryLanguageError = false;
  publishers: Publisher[] = [];
  errorMessage: string;

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

  ngOnInit(): void {

    // this.publisherService.getAll()
    // .subscribe(publishers => {
    //     this.publishers = publishers;
        
    // },
    //     error => this.errorMessage = <any>error);
    this.getPublishers()
    
  }

  getPublishers() {

    this.publisherService.getAll()
   .subscribe(publishers => {
       this.publishers = publishers;
       
   },
       error => this.errorMessage = <any>error);

  } //getPublishers

}
import { Component, OnInit } from '@angular/core';
import { Employee } from '../models/employee.model';
import { Router } from '@angular/router';

import { PublisherService } from '../services/publishers.service'
import { Publisher } from '../models/publisher';
import { NgForm } from '@angular/forms'

@Component({
  selector: 'home',
  styleUrls: ['./home.css'],
  templateUrl: './home.html',
  providers: [PublisherService]
})

export class Home implements OnInit {
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


  ngOnInit(): void {


    this.getPublishers()
    
  }

  getPublishers() {

    this.publisherService.getAll()
   .subscribe(publishers => {
       this.publishers = publishers;
       
   },
       error => this.errorMessage = <any>error);

  } //getPublishers

   onDelete(id: number) {
     let str: string = id.toString()
    if (confirm('Are you sure to delete this record ? ' + str) == true) {
      this.publisherService.delete(str)
      this.router.navigate(['/login']);

      }
    } 


//  onSubmit(form: NgForm) {
//     if (1 == 1) {
//      // this.employeeService.postEmployee(form.value)
//       this.publisherService.create(form.value)
//         .subscribe(data => {
//           // this.resetForm(form);
//           //this.employeeService.getEmployeeList();
//           //this.toastr.success('New Record Added Succcessfully', 'Employee Register');
//         })
//     }

}

import { Component, OnInit } from '@angular/core';
import { Employee } from '../models/employee.model';
import { Router } from '@angular/router';

//import { PublisherService } from '../services/publishers.service'
import { SurveyService } from '../services/surveys.service'

import { ISurvey } from '../models/survey';
import { NgForm } from '@angular/forms'

@Component({
  selector: 'home',
  styleUrls: ['./home.css'],
  templateUrl: './home.html',
  providers: [SurveyService]
})

export class Home implements OnInit {
  languages = ['English', 'Spanish', 'Other'];
  //model = new Employee('Darla', 'Smith');
  model: any = {};
  loading = false;
  hasPrimaryLanguageError = false;
  surveys: ISurvey[] = [];
  errorMessage: string;

  constructor (
    private router: Router,
    private surveyService: SurveyService,

  ) {
   
  }

  getData() {
    this.loading = true;
    this.surveyService.create(this.model)
        .subscribe(
            data => {
                this.router.navigate(['/login']);
            },
            error => {
                this.loading = false;
            });
}


  ngOnInit(): void {


    this.getSurveys()
    
  }

  getSurveys() {

    this.surveyService.getAll()
   .subscribe(surveys => {
       this.surveys = surveys;
       
   },
       error => this.errorMessage = <any>error);

  } //getSurveys

  //  onDelete(id: number) {

  //   if (confirm('Are you sure to delete this record ? ' ) == true) {
  //     this.surveyService.delete(id)
  //     this.router.navigate(['/login']);

  //     }
  //   } 


//  onSubmit(form: NgForm) {
//     if (1 == 1) {
//      // this.employeeService.postEmployee(form.value)
//       this.surveyService.create(form.value)
//         .subscribe(data => {
//           // this.resetForm(form);
//           //this.employeeService.getEmployeeList();
//           //this.toastr.success('New Record Added Succcessfully', 'Employee Register');
//         })
//     }

}

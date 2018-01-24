import { Component, OnInit } from '@angular/core';
import { Employee } from '../models/employee.model';
import { ActivatedRoute, Router } from "@angular/router";
//import { PublisherService } from '../services/publishers.service'
import { SurveyService } from '../services/surveys.service'
import { ISurvey } from '../models/survey';
import { NgForm } from '@angular/forms'

@Component({
  selector: 'form-delete',
  styleUrls: ['./form-delete.css'],
  templateUrl: './form-delete.html',
  providers: [SurveyService]
})

export class FormDelete implements OnInit {
  languages = ['English', 'Spanish', 'Other'];
  //model = new Employee('Darla', 'Smith');
  model: any = {};
  loading = false;
  hasPrimaryLanguageError = false;
  surveys: ISurvey[] = [];
  errorMessage: string;

  id: number;


  constructor (
    private route: ActivatedRoute,  
    private router: Router,
    private surveyService: SurveyService,

  ) {
    this.id = this.route.snapshot.params['id']; 
    this.getSurvey(this.id)
  }



  ngOnInit(): void {
    

  }

  	//get one and only one record
      getSurvey(id: number) {

        this.surveyService.getById(id)
       .subscribe(model => {
           this.model = model;
           
       },
           error => this.errorMessage = <any>error);
    
      } //getSurvey

//   addNew() {
//     this.loading = true;
//     this.surveyService.create(this.model)
//         .subscribe(
//             data => {
//                this.router.navigate(['/login']);
//             },
//             error => {
//                 this.loading = false;
//             });
//     }
  
  editExisting() {
    this.loading = true;
    this.surveyService.update(this.model)
        .subscribe(
            data => {
               this.router.navigate(['/login']);
            },
            error => {
                this.loading = false;
            });
    }

    deleteExisting() {
        this.loading = true;
        this.surveyService.delete(this.model)
            .subscribe(
                data => {
                   this.router.navigate(['/login']);
                },
                error => {
                    this.loading = false;
                });
        }

}

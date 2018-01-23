import { Component, OnInit } from '@angular/core';
import { Employee } from '../models/employee.model';
import { ActivatedRoute, Router } from "@angular/router";
import { PublisherService } from '../services/publishers.service'
import { Publisher } from '../models/publisher';
import { NgForm } from '@angular/forms'

@Component({
  selector: 'form-edit',
  styleUrls: ['./form-edit.css'],
  templateUrl: './form-edit.html',
  providers: [PublisherService]
})

export class FormEdit implements OnInit {
  languages = ['English', 'Spanish', 'Other'];
  //model = new Employee('Darla', 'Smith');
  model: any = {};
  loading = false;
  hasPrimaryLanguageError = false;
  publishers: Publisher[] = [];
  errorMessage: string;

  id: number;


  constructor (
    private route: ActivatedRoute,  
    private router: Router,
    private publisherService: PublisherService,

  ) {
    this.id = this.route.snapshot.params['id']; 
    this.getPublisher(this.id)
  }



  ngOnInit(): void {
    

  }

  	//get one and only one record
      getPublisher(id: number) {

        this.publisherService.getById(id)
       .subscribe(model => {
           this.model = model;
           
       },
           error => this.errorMessage = <any>error);
    
      } //getPublisher

//   addNew() {
//     this.loading = true;
//     this.publisherService.create(this.model)
//         .subscribe(
//             data => {
//                this.router.navigate(['/login']);
//             },
//             error => {
//                 this.loading = false;
//             });
//     }
  
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

import { Component, OnInit, ViewEncapsulation } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { GridComponent, GridDataResult, PageChangeEvent, DataStateChangeEvent } from "@progress/kendo-angular-grid";
import { AdminService } from "../../admin/admin.service";
import { ISurveyQuestionDetail } from "../../admin/model/surveyQuestionDetail"
import { NgForm } from '@angular/forms'

import { SortDescriptor, orderBy, State, process } from '@progress/kendo-data-query';
import { GroupDescriptor, DataResult, GroupResult } from '@progress/kendo-data-query';

import { Observable } from 'rxjs/Rx';
import { animate } from '@angular/animations';
import { $ } from "protractor";

/**************************************************************************************
name:
purpose:

					DATE		COMMENT
--------------------------------------------
William Thompson	02/13/2018	Created. Based on/copied from existing district list objects.

**************************************************************************************/

@Component({
    selector: "survey-level2",
  
    templateUrl: '../../admin/manage-surveys/manage-surveyLevel2.component.html',

//     template: `
//     <kendo-grid
//     [kendoGridBinding]="gridData"
//     [pageSize]="10"
//     [pageable]="true"
//     [sortable]="true"
//     [filterable]="true"
//     [groupable]="true"
//     [height]="510">

//      <kendo-grid-column field="surveyId" width="100"></kendo-grid-column>
//      <kendo-grid-column field="surveyName" width="100"></kendo-grid-column>
//      <kendo-grid-column field="pageName" width = "100"></kendo-grid-column>
//    </kendo-grid>
//    `,

    styleUrls: ["../../admin/manage-surveys/manage-surveyLevel2.component.css"],
    providers: [AdminService],
    encapsulation: ViewEncapsulation.None
})
export class SurveyLevel2Component implements OnInit {

    title: string = "Manage Survey Details";
    errorMessage: string;
        
    //public view: Observable<GridDataResult>
    //public gridData: Observable<GridDataResult>;
    public gridData: any[];

    id: number;

    private state: State = {
        skip: 0,
        take: 20
    };


    //surveyQuestionDetailList: Array<ISurveyQuestionDetail> = [] as Array<ISurveyQuestionDetail>;

    constructor(private route: ActivatedRoute, private adminService: AdminService
        , private router: Router) {
            this.id = this.route.snapshot.params['id'];

            //this.view = this.adminService.surveyDetailGetById(this.id);
            
              
            this.GetRendering(this.id)
            
    }
    
    ngOnInit(): void {

        this.adminService.surveyDetailGetById(this.id)
            .subscribe(surveyQuestionDetails => {
                this.gridData = surveyQuestionDetails;
                
            });
           // this.loadItems();


    }

    GetRendering(id: number) : any  {
        this.adminService.surveyDetailGetById(id)
            .subscribe(data => {
                this.gridData = data;
                
            },
            error => this.errorMessage = <any>error);
    }

    // private loadItems(): void {
    //     this.gridData = {
    //         data: orderBy(this.surveyQuestionDetailList.slice(this.state.skip, this.state.skip + this.pageSize), this.sort),
    //         total: this.surveyQuestionDetailList.length
    //     };          
    // }

    //  GetRendering(id: number) {
    //     this.adminService.surveyDetailGetById(id)
    //         .subscribe(surveyQuestionDetails => {
    //             this.gridData = surveyQuestionDetails;
                
    //         },
    //         error => this.errorMessage = <any>error);
    // }

    // //TODO: William Thompson
    // postSurveyDetail () {
    //     this.adminService.surveyDetailCreate(this.model)
    //     .subscribe(data => {
                        
    //     },
    //     error => {
    //         this.loading = false;
    //     });

    // }

    // //TODO: William Thompson
    // getSurveyDetail(id: number) {
    //     this.adminService.surveyDetailGetById(id)
    //         .subscribe(model => {
    //             this.model = model;
                
    //         },
    //         error => this.errorMessage = <any>error);
    //     this.postSurveyDetail()

    // }



    // getSurveyDetail(id: number) {
    //     this.adminService.surveyDetailGetById(id)
    //         .subscribe(model => {
    //             this.model = model;

    //         },
    //         error => this.errorMessage = <any>error);

    // }

    // public groupChange(groups: GroupDescriptor[]): void {
    //     this.groups = groups;
    //     this.getSurveyDetail(this.id);
 
    // }

    // public groupable: {
    //     messages: {
    //         empty: "Custom message text"
    //     }
    // }
    

} //class 
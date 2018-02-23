import { Component, OnInit, ViewEncapsulation, ViewChild } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { GridComponent, GridDataResult, PageChangeEvent, DataStateChangeEvent } from "@progress/kendo-angular-grid";
import { FormBuilder, FormControl, FormGroup, Validators } from "@angular/forms";
import { AdminService } from "../admin/admin.service";
import { ISurvey } from "../admin/survey"
import { NgForm } from '@angular/forms'

import { SortDescriptor, orderBy, State, process } from '@progress/kendo-data-query';
import { GroupDescriptor, DataResult, GroupResult } from '@progress/kendo-data-query';

import { Observable } from 'rxjs/Rx';
import { animate } from '@angular/animations';

import { ISurveyQuestionDetail } from './model/surveyQuestionDetail'

/**************************************************************************************
name:
purpose:

					DATE		COMMENT
--------------------------------------------
William Thompson	01/10/2018	Created. Based on/copied from existing district list objects.
William Thompson    02/15/2018  post for surveyQuestionDetail
**************************************************************************************/

@Component({
    selector: "survey-render",
   
    templateUrl: '../admin/survey-grid.component.html',
    styleUrls: ["../admin/survey-grid.component.css"],
    providers: [AdminService],
    encapsulation: ViewEncapsulation.None
})
export class SurveyGridComponent implements OnInit {

    title: string = "Manage Surveys";
    model: any = {};
    loading = false;
    surveys: ISurvey[] = [];
    errorMessage: string;
    message: ISurvey[] = [];
    surveyQuestionDetails: ISurveyQuestionDetail[] = [];
    
    public gridData: GridDataResult;
    skip: number = 0;
    take: number = 20;

    public groups: GroupDescriptor[] = [{ field: 'surveys.name' }];

    private state: State = {
        skip: 0,
        take: 5
    };

    constructor(private route: ActivatedRoute, private adminService: AdminService
        , private router: Router) {

    }
    
    ngOnInit(): void {
        this.getSurveys();
    }

    getSurveys() {
        this.adminService.surveyGetAll()
            .subscribe(surveys => {
                this.gridData = surveys;
            },
            error => this.errorMessage = <any>error);
    }

    editExisting (value) {

    }

    //v1
    // addExisting(value) {
    //    this.model = value;
    //    //this.router.navigate(['/surveyFormEdit/', this.model.dataItem.id]);
    //    this.router.navigate(['/surveyDetails/', this.model.dataItem.id]);
    // }


    //v2
    addExisting (value) {

        this.model = value;

        let message = {
            id: this.model.dataItem.id,
            name: this.model.dataItem.name,
            description: this.model.dataItem.description,
            surveyTypeCode: this.model.dataItem.surveyTypeCode,
            instructions: this.model.dataItem.instructions,

            isLocked: this.model.dataItem.isLocked,
            closeDate: this.model.dataItem.closeDate,
            createDate: this.model.dataItem.createDate,
            createdBy: this.model.dataItem.createdBy,
            updateDate: this.model.dataItem.updateDate,

            updatedBy: this.model.dataItem.updatedBy,
            schoolYear: this.model.dataItem.schoolYear,
            leaverYear: this.model.dataItem.LeaverYear,
            isReported: this.model.dataItem.isReported,
            openDate: this.model.dataItem.openDate
            };

        this.adminService.surveyDetailCreate(message)
        .subscribe(surveys => {
            this.surveys = surveys;
            this.router.navigate(['/surveyDetails/', this.model.dataItem.id]);
        },
        error => this.errorMessage = <any>error)
        //,      this.router.navigate(['/surveyDetails/', this.model.dataItem.id]);
        //this.getLevel2(value)
    }

    getLevel2(value) {
        this.model = value;

        let surveyQuestionDetails = {
            surveyId:  this.model.dataItem.id
        }
        //this.router.navigate(['/surveyDetails/', surveQuestionDetails.surveyId]);
        this.router.navigate(['/surveyDetails/', surveyQuestionDetails.surveyId]);
    }

    public groupChange(groups: GroupDescriptor[]): void {
        this.groups = groups;
        this.getSurveys();
 
    }


    

} //class 
import { Component, OnInit, ViewEncapsulation, ViewChild } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { GridComponent, GridDataResult, PageChangeEvent, DataStateChangeEvent } from "@progress/kendo-angular-grid";
import { AdminService } from "../admin/admin.service";
import { ISurvey } from "../admin/survey"
import { NgForm } from '@angular/forms'

import { SortDescriptor, orderBy, State, process } from '@progress/kendo-data-query';
import { GroupDescriptor, DataResult } from '@progress/kendo-data-query';
import { GroupResult } from '@progress/kendo-data-query';

import { Observable } from 'rxjs/Rx';
import { animate } from '@angular/animations';

import { SurveyLevel2Component } from '../admin/manage-surveys/manage-surveyLevel2.component'

/**************************************************************************************
name:
purpose:

					DATE		COMMENT
--------------------------------------------
William Thompson	01/10/2018	Created. Based on/copied from existing district list objects.

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
    
    public gridData: GridDataResult;
    skip: number = 0;
    take: number = 20;

    public groups: GroupDescriptor[] = [{ field: 'surveys.name' }];

    private state: State = {
        skip: 0,
        take: 5

    
    };

    @ViewChild(SurveyLevel2Component) level2Component;

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

        this.model = value;
        //this.router.navigate(['/surveyFormEdit/', this.model.dataItem.id]);
        this.router.navigate(['/surveyDetails/', this.model.dataItem.id]);
    }

    addExisting (value) {

        this.model = value;
        //this.router.navigate(['/surveyFormEdit/', this.model.dataItem.id]);
        this.router.navigate(['/surveyDetails/', this.model.dataItem.id]);

 
    }

    public groupChange(groups: GroupDescriptor[]): void {
        this.groups = groups;
        this.getSurveys();
 
    }

    

} //class 
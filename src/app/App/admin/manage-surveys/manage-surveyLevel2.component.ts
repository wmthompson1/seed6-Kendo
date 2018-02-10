import { Component, OnInit, ViewEncapsulation } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { GridComponent, GridDataResult, PageChangeEvent, DataStateChangeEvent } from "@progress/kendo-angular-grid";
import { AdminService } from "../../admin/admin.service";
import { ISurvey } from "../../admin/survey"
import { NgForm } from '@angular/forms'

import { SortDescriptor, orderBy, State, process } from '@progress/kendo-data-query';
import { GroupDescriptor, DataResult } from '@progress/kendo-data-query';
import { GroupResult } from '@progress/kendo-data-query';

import { Observable } from 'rxjs/Rx';
import { animate } from '@angular/animations';

/**************************************************************************************
name:
purpose:

					DATE		COMMENT
--------------------------------------------
William Thompson	01/10/2018	Created. Based on/copied from existing district list objects.

**************************************************************************************/

@Component({
    selector: "survey-level2",
    // template: `<kendo-grid
    // [kendoGridBinding]="gridData"
    // (edit)="editExisting($event)" 
    // [pageSize]="10"
    // [pageable]="true"
    // [sortable]="true"
    // [filterable]="true"
    // [groupable]="true"
    // [height]="510">
    //     <kendo-grid-column field="id" title="ID" width="80">
    //     </kendo-grid-column>
    //     <kendo-grid-column field="name" title="Name" width="250">
    //     </kendo-grid-column>
    //     <kendo-grid-column field="description" title="Description" width="250">
    //     </kendo-grid-column>
    //     <kendo-grid-column field="surveyTypeCode" title="SurveyTypeCode" width="80">
    //     </kendo-grid-column>
    //     <kendo-grid-column field="instructions" title="Instructions" width="80">
    //     </kendo-grid-column>
    //     <kendo-grid-column field="isLocked" title="IsLocked" width="120">
    //         <ng-template kendoGridCellTemplate let-dataItem>
    //             <input type="checkbox" [checked]="dataItem.isLocked" disabled />
    //         </ng-template>
    //     </kendo-grid-column>

    //     <kendo-grid-command-column title="">
    //     <ng-template kendoGridCellTemplate>
    //         <div kendoGridEditCommand class="k-button" style="border: none;"><span class="k-icon k-i-edit"></span></div>                        
    //     </ng-template>
    //     </kendo-grid-command-column>

    // </kendo-grid>
    // `,
   
    templateUrl: '../../admin/manage-surveys/manage-surveyLevel2.component.html',
    styleUrls: ["../../admin/manage-surveys/manage-surveyLevel2.component.css"],
    providers: [AdminService],
    encapsulation: ViewEncapsulation.None
})
export class SurveyLevel2Component implements OnInit {

    title: string = "Manage Survey Details";
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

    constructor(private route: ActivatedRoute, private adminService: AdminService
        , private router: Router) {

    }
    
    ngOnInit(): void {
        this.GetAll();
    }

    GetAll() {
        this.adminService.surveyDetailGetAll()
            .subscribe(surveys => {
                this.gridData = surveys;
                
            },
            error => this.errorMessage = <any>error);
    }

    // editExisting (value) {

    //     this.model = value;
    //     this.router.navigate(['/surveyLevel2FormEdit/', this.model.dataItem.id]);

    // }

    public groupChange(groups: GroupDescriptor[]): void {
        this.groups = groups;
        this.GetAll();
 
    }

    public groupable: {
        messages: {
            empty: "Custom message text"
        }
    }
    

} //class 
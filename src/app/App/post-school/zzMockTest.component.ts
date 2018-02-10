import { Component, OnInit, ViewEncapsulation } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { GridComponent, GridDataResult, PageChangeEvent, DataStateChangeEvent } from "@progress/kendo-angular-grid";
import { AdminService } from "../admin/admin.service";
import { ISurvey } from "../admin/survey"
import { NgForm } from '@angular/forms'

/**************************************************************************************
name:
purpose:

					DATE		COMMENT
--------------------------------------------
William Thompson	01/10/2018	Created. Based on/copied from existing district list objects.

**************************************************************************************/

@Component({
    selector: "survey-render",
    template: `<kendo-grid
    [kendoGridBinding]="gridData"
    [pageSize]="10"
    [pageable]="true"
    [sortable]="true"
    [filterable]="true"
    [groupable]="true"
    [height]="510">
        <kendo-grid-column field="id" title="ID" width="80">
        </kendo-grid-column>
        <kendo-grid-column field="name" title="Name" width="250">
        </kendo-grid-column>
        <kendo-grid-column field="description" title="Description" width="250">
        </kendo-grid-column>
        <kendo-grid-column field="surveyTypeCode" title="SurveyTypeCode" width="80">
        </kendo-grid-column>
        <kendo-grid-column field="instructions" title="Instructions" width="80">
        </kendo-grid-column>
        <kendo-grid-column field="isLocked" title="IsLocked" width="120">
            <ng-template kendoGridCellTemplate let-dataItem>
                <input type="checkbox" [checked]="dataItem.isLocked" disabled />
            </ng-template>
        </kendo-grid-column>

    </kendo-grid>
    `,
    styleUrls: ["../post-school/zzMockTest.component.css"],
    providers: [AdminService],
    encapsulation: ViewEncapsulation.None
})
export class zzMockTestComponent implements OnInit {

    title: string = "Manage Surveys";
    model: any = {};
    loading = false;
    surveys: ISurvey[] = [];
    errorMessage: string;
    
    public gridData: GridDataResult;
    skip: number = 0;
    take: number = 20;

    constructor(private route: ActivatedRoute, private adminService: AdminService, private router: Router) {

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



    

} //class
import { Component, OnInit, ViewEncapsulation } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { AdminService } from "../admin/admin.service";
import { ISurvey } from "./survey"
import { NgForm } from '@angular/forms'

/**************************************************************************************
PURPOSE:    

SAMPLE EXEC:

					DATE		COMMENT
--------------------------------------------
William Thompson	01/10/2018	Created. Based on/copied from existing district list objects

**************************************************************************************/

@Component({
    selector: "survey-render",
    templateUrl: "./survey-render.component.html",
    styleUrls: ["./survey-render.component.css"],
    providers: [AdminService],
    encapsulation: ViewEncapsulation.None
})
export class SurveyRenderComponent implements OnInit {

    model: any = {};
    loading = false;
    surveys: ISurvey[] = [];
    errorMessage: string;

    constructor(private route: ActivatedRoute, private adminService: AdminService, private router: Router) {

    }


    ngOnInit(): void {
        this.getSurveys()
    }

    getSurveys() {
        this.adminService.surveyGetAll()
            .subscribe(surveys => {
                this.surveys = surveys;
            },
            error => this.errorMessage = <any>error);
    }

} //class
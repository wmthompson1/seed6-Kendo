import { Component, OnInit, ViewEncapsulation } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";

import { AdminService } from "../admin/admin.service";
import { ISurveyQuestion } from "../surveys/model/surveyQuestion";

/**************************************************************************************
Name: 
manage-survey.component.ts




					DATE		COMMENT
--------------------------------------------
William Thompson	03/08/2018	Created.

**************************************************************************************/

@Component({
    selector: "home",
    templateUrl: "../surveys/manage-surveyQuestion.component.html",
    styleUrls: ["../surveys/manage-surveyQuestion.component.css"],
    providers: [AdminService],
    encapsulation: ViewEncapsulation.None
})
export class SurveyQuestionComponent implements OnInit {

  
    surveyQuestion: Array<ISurveyQuestion> = [] as Array<ISurveyQuestion>;

    id: number;
    errorMessage: string;
    model: any = {};


    constructor(private route: ActivatedRoute, private adminService: AdminService, private router: Router) {
        this.id = this.route.snapshot.params['id'];
        console.log("parm id at component::", this.id)
        this.getData();
    }


    getData(): void {
        this.adminService
            .getSurveyQuestion(this.id)
            .subscribe(result => {
                this.surveyQuestion = result;
            },
            error => this.errorMessage = <any>error);
    }



    ngOnInit() {


    }
}

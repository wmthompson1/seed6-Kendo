import { Component, OnInit, ViewEncapsulation } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { AdminService } from "../../admin/admin.service";
import { ISurvey } from "../survey";
//import { PsService } from "../Post-School/ps.service";
//import { DistrictSummary } from "./DistrictSummary";
//import { ReportsService } from "../reports/reports.service";

/**************************************************************************************
Name:  manage-surveyFormEdit 

purpose: edit surveys

					DATE		COMMENT
--------------------------------------------
William Thompson	01/10/2018	Created. Based on/copied from existing district list objects

**************************************************************************************/

@Component({
    selector: "manage-surveyAddForm",
    templateUrl: "../../admin/manage-surveys/manage-surveyFormAddDetail.html",
    styleUrls: ["../../admin/manage-surveys/manage-surveyFormAddDetail.css"],
    providers: [AdminService],
    encapsulation: ViewEncapsulation.None
})
export class SurveyLevel2FormAddComponent implements OnInit {


    model: any = {};
    loading = false;
    surveys: ISurvey[] = [];
    errorMessage: string;
    id: number;

    constructor(private route: ActivatedRoute, private adminService: AdminService, private router: Router) {
        this.id = this.route.snapshot.params['id'];
        this.getSurveyDetail(this.id);
    }


    ngOnInit()  {

    }

    getSurveyDetail(id: number) {
        this.adminService.surveyDetailGetById(id)
            .subscribe(model => {
                this.model = model;

            },
            error => this.errorMessage = <any>error);

    }

   addExisting() {
    this.loading = true;
    this.adminService.surveyDetailCreate(this.model)
        .subscribe(
        data => {
            this.router.navigate(['/surveyDetails']);
        },
        error => {
            this.loading = false;
        });
    }

}



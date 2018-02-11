# Seed3 
I copied from Seed1 as I needed a consistent dev env
Credit is entirely to the creator of Seed1 and not me.

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 1.6.5.

# Component Template
*SurveyLevel2FormAddComponent*


## Code scaffolding

manage-surveyFormAddDetail.css
manage-surveyFormAddDetail.html
manage-surveyFormAddDetail.ts


## Component Structure

_@Component_ 
   * selector: "manage-surveyAddDetail",
   * templateUrl: "../admin/manage-surveyFormAdd.component.html",
   * styleUrls: ["../admin/manage-surveyFormAdd.component.css"],

## App Module

App Module
import { SurveyLevel2FormAddComponent} from "./App/admin/manage-surveys/manage-surveyFormAddDetail"

## Routing - component
 { path: 'surveyDetailsAddForm', component: SurveyLevel2FormAddComponent },

parent.super.surveyDetails
this.surveyDetailsAddForm
this.surveyDetailsEditForm
this.surveyDetailsDeleteForm

## Routing Module

import { ManageSurveyFormAddComponent } from "./App/admin/manage-surveyFormAdd.component"	

## API Route
api route:  /api/admin/gensurveyQuestionDetailsAdd

## Steps for completion

* copy from template to files per naming conventions
* update selector, templateUrl, styleUrls
* update app module
* update service  (surveyDetailCreate)

## Notes
Level 2 will add records from master to detail
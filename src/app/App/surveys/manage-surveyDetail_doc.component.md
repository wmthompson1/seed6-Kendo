survey questions and answers/options doc

* ManageSurveyComponent *

_ http://localhost:59999/api/admin/surveyQuestion/1 _   

* getSurveyQuestions *

* manage-surveyQuestion *

# Note 
created in ng Cli

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 1.6.5.

# Component Template
*SurveyQuestionComponent*


## Code scaffolding

_folder_ manage-surveys:

manage-surveyQuestion.component.css
manage-surveyQuestion.component.html
manage-surveyQuestion.component.ts

## Component Structure

_@Component_    
   1. selector: "survey-question",


    1. selector: "survey-question",  
    2. templateUrl: "App/surveys/manage-surveyQuestion.component.html",
    3. styleUrls: ["App/surveys/manage-surveyQuestion.component.css"],

## App Module

App Module
import { SurveyQuestionComponent } from "./surveys/manage-surveyQuestion.component"	

## Routing Module

import { SurveyQuestionComponent } from "./surveys/manage-surveyQuestion.component.css"	

    { path: 'surveyQuestions/:id', component: SurveyQuestionComponent },
    { path: 'surveyQuestions', component: SurveyQuestionComponent },

## API Route
api route:  /api/admin/surveyQuestionQuestions

## Imports for component (copy from similar template)
import { AdminService } from "../App/admin/admin.service";
import { ISurvey } from "../models/survey"
import { ISurveyQuestion} from '../App/admin/model/surveyQuestion'

## Steps for completion of check-in

* update selector, templateUrl, styleUrls
* update app module
* update service  (surveyQuestionCreate)
   getSurveyQuestion(id: number): Observable<ISurveyQuestion[]> 
   {
        var fullUrl = this.baseUrl + '/api/admin/surveyQuestion/' + id;
        return this._http.get(fullUrl)
            .catch(this.handleError)
            .map(res => res.json());
    }
* be sure Data objects and classes are correctly located

## Notes
The linq in the first draft was emitting slow sql, needed index, but also may need nested projection.
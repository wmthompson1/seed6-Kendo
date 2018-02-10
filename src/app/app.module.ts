import {NgModule} from '@angular/core'
import {RouterModule} from "@angular/router";
import {rootRouterConfig} from "./app.routing";
import {AppComponent} from "./app";



//kendo
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { GridModule } from '@progress/kendo-angular-grid';

import "rxjs/Rx";
//import { AppRouting } from "./app.routing";
// import { AuthHttp } from "./auth.http";
// import { AuthService } from "./auth.service";
import { PsService } from "./App/post-school/ps.service";
// import { AppComponent } from "./app.component";
// import { LoginComponent } from "./login/login.component"
// import { UserCreateComponent } from "./admin/manage-user/user-edit/user-create.component";
// import { PageNotFoundComponent } from "./pagenotfound/page-not-found.component";
// import { HomeComponent } from "./home.component";
// import { TsfFooterComponent } from "./tsf-footer.component";
// import { TSFFaqComponent } from "./faq/tsf-faq.component";
// import { Indicator14DefinitionsComponent } from "./faq/indicator14-definitions.component";

import {Github} from "./github/shared/github";
import {FormsModule} from "@angular/forms";

import {HttpModule} from "@angular/http";
import {About} from './about/about';
import {Home} from './home/home';
import {Master} from './home/master';
import {RepoBrowser} from './github/repo-browser/repo-browser';
import {RepoList} from './github/repo-list/repo-list';
import {RepoDetail} from './github/repo-detail/repo-detail';
import {LocationStrategy, HashLocationStrategy} from '@angular/common';
import { PublisherService } from './services/publishers.service'
import { AppConfig } from './app.config'
import { FormAdd } from './home/form-add';
import { FormEdit } from './home/form-edit';
import { FormDelete } from './home/form-delete';
import { ManageSurveyComponent } from './home/manage-survey.component';
import { SurveyService } from './services/surveys.service'
//import { SurveyRenderComponent } from './home/survey-render.component'
import { TsfFooterComponent } from './home/tsf-footer.component'
import { SurveyRenderComponent } from "./App/admin/survey-render.component";
import { AdminService } from "./App/admin/admin.service";
import { ManageSurveyFormEditComponent } from "./App/admin/manage-surveyFormEdit.component"
import { SurveyGridComponent} from "./App/admin/survey-grid.component"

import { SurveyLevel2Component } from "./App/admin/manage-surveys/manage-surveyLevel2.component"
 

@NgModule({
  declarations: [AppComponent, About, RepoBrowser 
        , RepoList, RepoDetail, Home, Master, FormAdd, FormEdit
        , FormDelete,ManageSurveyComponent,TsfFooterComponent
        , SurveyRenderComponent, ManageSurveyFormEditComponent,SurveyGridComponent
        , SurveyLevel2Component ],

  imports     : [BrowserModule, FormsModule, HttpModule,BrowserAnimationsModule, GridModule
        , RouterModule.forRoot(rootRouterConfig)],
  providers   : [Github, {provide: LocationStrategy, useClass: HashLocationStrategy}
	,PublisherService, AppConfig ],
  bootstrap   : [AppComponent]
})
export class AppModule {

}

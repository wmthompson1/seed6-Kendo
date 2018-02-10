import {Routes, RouterModule} from '@angular/router';
import {About} from './about/about';
import {Home} from './home/home';
import {Master} from './home/master';
import {RepoBrowser} from './github/repo-browser/repo-browser';
import {RepoList} from './github/repo-list/repo-list';
import {RepoDetail} from './github/repo-detail/repo-detail';
import { FormAdd } from './home/form-add';
import { FormEdit } from './home/form-edit';
import { FormDelete } from './home/form-delete';
import { SurveyRenderComponent } from "./App/admin/survey-render.component";
import { ManageSurveyFormEditComponent } from "./App/admin/manage-surveyFormEdit.component";
import { SurveyGridComponent } from "./App/admin/survey-grid.component"
import { SurveyLevel2Component } from "./App/admin/manage-surveys/manage-surveyLevel2.component"

export const rootRouterConfig: Routes = [

  
    { path: 'home', component: Home },
    { path: 'master', component: Master },
    { path: 'formAdd', component: FormAdd },
    { path: 'formEdit/:id', component: FormEdit },
    { path: 'formDelete/:id', component: FormDelete },
    //{ path: 'mock-test', component: SurveyGridComponent },
    { path: 'survey-render', component: SurveyGridComponent },
    { path: 'surveyFormEdit/:id', component: ManageSurveyFormEditComponent },
    { path: 'surveyDetails', component: SurveyLevel2Component },
    

    {path: 'about', component: About},
    {path: '**', component: Home}
    // {path: 'github', component: RepoBrowser,
    //   children: [
    //     {path: '', component: RepoList},
    //     {path: ':org', component: RepoList,
    //       children: [
    //         {path: '', component: RepoDetail},
    //         {path: ':repo', component: RepoDetail}
    //       ]
    //     }]
    // }
  ];


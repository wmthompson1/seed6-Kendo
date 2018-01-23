import {Routes, RouterModule} from '@angular/router';
import {About} from './about/about';
import {Home} from './home/home';
import {Master} from './home/master';
import {RepoBrowser} from './github/repo-browser/repo-browser';
import {RepoList} from './github/repo-list/repo-list';
import {RepoDetail} from './github/repo-detail/repo-detail';
import { FormAdd } from './home/form-add';

export const rootRouterConfig: Routes = [

  
    {path: 'home', component: Home},
    {path: 'master', component: Master},
    {path: 'formAdd', component: FormAdd},
    {path: 'about', component: About},
    {path: '**', component: Home},
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


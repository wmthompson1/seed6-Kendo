import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions, Response } from '@angular/http';

import { AppConfig } from '../app.config';
import { ISurvey } from '../models/Survey';

import { Observable } from 'rxjs/Observable';

@Injectable()
export class SurveyService {
    constructor(private http: Http, private config: AppConfig) { }

    getAll() {
        return this.http.get(this.config.apiUrl +
             '/api/admin/surveys').map((response: Response) => response.json());
    }

    getById(id: number) {
        return this.http.get(this.config.apiUrl +
             '/api/admin/surveys/' + id).map((response: Response) => response.json());
    }

    create(survey: ISurvey) {
        return this.http.post(this.config.apiUrl + 
            '/api/admin/surveys', survey);
    }

    update(survey: ISurvey) {
        return this.http.put(this.config.apiUrl 
            + '/api/admin/surveys/' + survey.id, survey);
    }

    //v1 here:
    // delete(id: number)    {
    //     console.log( this.config.apiUrl  + '/api/admin/surveys/' + id );
    //     return this.http.delete(this.config.apiUrl  + '/api/admin/surveys/' + id );

    //    }

    //v2 here

    delete(survey: ISurvey) {
        return this.http.delete(this.config.apiUrl 
            + '/api/admin/surveys/' + survey.id );  //, survey);
    }

    // // private helper methods

    // private jwt() {
    //     // create authorization header with jwt token
    //     let currentUser = JSON.parse(localStorage.getItem('currentUser'));
    //     if (currentUser && currentUser.token) {
    //         let headers = new Headers({ 'Authorization': 'Bearer ' + currentUser.token });
    //         return new RequestOptions({ headers: headers });
    //     }
    // }
}
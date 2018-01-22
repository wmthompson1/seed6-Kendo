import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions, Response } from '@angular/http';

import { AppConfig } from '../app.config';
import { Publisher } from '../models/Publisher';

@Injectable()
export class PublisherService {
    constructor(private http: Http, private config: AppConfig) { }

    getAll() {
        return this.http.get(this.config.apiUrl +
             '/publishers').map((response: Response) => response.json());
    }

    getById(id: number) {
        return this.http.get(this.config.apiUrl +
             '/publishers/' + id).map((response: Response) => response.json());
    }

    create(publisher: Publisher) {
        return this.http.post(this.config.apiUrl + 
            '/publishers', publisher);
    }

    update(publisher: Publisher) {
        return this.http.put(this.config.apiUrl 
            + '/publishers/' + publisher.id, publisher);
    }

    delete(id: number) {
        return this.http.delete(this.config.apiUrl + '/publishers/' + id);
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
import {Injectable } from '@angular/core';
import { Http, HttpModule, Headers } from '@angular/http';
import { HttpClientModule, HttpClient } from "@angular/common/http";

@Injectable()
export class AuthHttp {
    http = null;
    authKey = "auth";
    httpCM = null;

    constructor(http: Http, hcm: HttpClient) {
        this.http = http;
        this.httpCM = hcm;
    }

    get(url, opts = {}) {
        this.configureAuth(opts);
        return this.http.get(url, opts);
    }

    getCM(url, opts = {}) {
        this.configureAuth(opts);
        return this.httpCM.get(url, opts);
    }

    post(url, data, opts = {}) {
        this.configureAuth(opts);
        return this.http.post(url, data, opts);
    }

    put(url, data, opts = {}) {
        this.configureAuth(opts);
        return this.http.put(url, data, opts);
    }

    delete(url, opts = {}) {
        this.configureAuth(opts);
        return this.http.put(url, opts);
    }

    configureAuth(opts: any) {
        var i = localStorage.getItem(this.authKey);
        if (i != null) {
            var auth = JSON.parse(i);
            //console.log(auth);
            if (auth.access_token != null) {
                if (opts.headers == null) {
                    opts.headers = new Headers();
                }
                opts.headers.set("Authorization", 'Bearer ' + auth.access_token);
            }
        }
    }
}
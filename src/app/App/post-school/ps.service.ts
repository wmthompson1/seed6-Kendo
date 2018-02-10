import { Injectable } from "@angular/core";
import { Http, Response } from "@angular/http";
import { Router } from "@angular/router";
import { Observable } from 'rxjs/Observable';
import { DistrictSummary } from "./DistrictSummary";
import { StudentSummary } from "./StudentSummary";
import { Agency } from "./School";
import { SearchResult } from "./SearchResult";
import 'rxjs/add/operator/toPromise';
import { DistrictSchools } from "./DistrictSchools"; 
import 'rxjs/add/observable/of';

@Injectable()
export class PsService {
    constructor(public _http: Http, private router: Router) { this.baseUrl = window.location.origin; }

    baseUrl: string;
    getDistrictsSummary(agencyCode: number, schoolYear: string): Observable<DistrictSummary[]> {
        var fullUrl = this.baseUrl + '/api/postschool/getdistrictlist/' + agencyCode + '/' + schoolYear;

        return this._http.get(fullUrl)
            .map(res => res.json() as DistrictSummary[])
            .catch(this.handleError);
    }

    getSchools(): Observable<Agency[]> {
        var fullUrl = this.baseUrl + '/api/postschool/getSchools';

        return this._http.get(fullUrl)
            .map(res => res.json() as Agency[])
            .catch(this.handleError);
    }

    getSchoolsSummary(agencyCode: string, schoolYear: string, ssid: string, useName: string): Observable<StudentSummary[]> {
        var fullUrl = this.baseUrl + '/api/postschool/getSchoolSummary/' + agencyCode + '/' + schoolYear + '/' + ssid + '/' + useName;
        return this._http.get(fullUrl)
            .catch(this.handleError)
            .map(data => data.json());

    }

    private handleError(error: Response) {
        return Observable.throw(error.json().error || 'Server error');
    }

    deleteRecord(subjectSurveyId: number, userAgencyId: number) {
        var fullUrl = this.baseUrl + '/api/postschool/deleterecord/' + subjectSurveyId + '/' + userAgencyId;
        return this._http.get(fullUrl)
            .catch(this.handleError);
    }

    doSSIDSearch(ssid: string, email: string, schoolYear: string, agencyId: number): Observable<SearchResult> {
        var fullUrl = this.baseUrl + '/api/postschool/searchssid/' + ssid + '/' + email + '/' + schoolYear + '/' + agencyId;

        var response = this._http.get(fullUrl)
            .catch(this.handleError)
                    
        return response;
    }

    getDistrictSchools(agencyCode: number, SChoolYear: string): Observable<DistrictSchools[]> {
        var fullUrl = this.baseUrl + '/api/postschool/getDistrictSchoolSummary/' + agencyCode + '/' + SChoolYear;
        return this._http.get(fullUrl)
            .map(res => res.json() as DistrictSchools[])
            .catch(this.handleError);
    }

    /* ***************

    Return mocked data sourced to JSON

    **************** */

    

    mockDistrictSchools: DistrictSchools[]  = 
    [
        {
            "SchoolAgencyId": 806,
            "SchoolName": "Bainbridge High School",
            "Progress": 100,
            "ResponseRate": 0.917,
            "ContactRate": 0.917,
            "NotStartedCount": 0,
            "StartedCount": 0,
            "FinishedCount": 12,
            "TotalCount": 12,
            "DistrictProgress": 100,
            "DistrictContactRate": 0.952,
            "DistrictResponseRate": 0.952
        },
        {
            "SchoolAgencyId": 807,
            "SchoolName": "Bainbridge Special Education Services",
            "Progress": 0,
            "ResponseRate": 0.000,
            "ContactRate": 0.000,
            "NotStartedCount": 0,
            "StartedCount": 0,
            "FinishedCount": 0,
            "TotalCount": 0,
            "DistrictProgress": 100,
            "DistrictContactRate": 0.952,
            "DistrictResponseRate": 0.952
        }
    ]
        
   // foo: DistrictSchools[] = this.mockDistrictSchools;
    foo: Observable<DistrictSchools[]> = Observable.of(this.mockDistrictSchools);

    bar: DistrictSchools[] = this.mockDistrictSchools;

    getMockData(agencyCode: number, SChoolYear: string): Observable<DistrictSchools[]> {
        return this.foo
    }  // getMockData
}

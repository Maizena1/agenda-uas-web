import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders} from '@angular/common/http';
import { Observable } from 'rxjs';
import { ProviderAst } from '@angular/compiler';


@Injectable({providedIn: 'root'})
export class ConfigService {
    constructor(private http: HttpClient) { }

    apiUrl = 'https://api-agenda-uas.herokuapp.com';

    getAllDates(): Observable<{}> {
    return this.http.post(this.apiUrl + '/search-dates', {}, { headers:undefined, 
        withCredentials: true } );
    
    }
}


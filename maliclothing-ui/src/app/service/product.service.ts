import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, Subject } from 'rxjs'

import { environment } from '../../environments/environment';

const httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
    providedIn: 'root'
})
export class ProductService {

    env = environment;

    constructor(private http: HttpClient) { }

    getProducts(): any {
        return this.http.get(this.env.productWebWServiceUrl);
    }
}
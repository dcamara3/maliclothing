import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, Subject } from 'rxjs'

const httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class ProductService {

    constructor(private http:HttpClient) {}
 
    getProducts() {
        return this.http.get('http://localhost:8081/maliclothing/product/all/');
    }

        // Uses Observable.forkJoin() to run multiple concurrent http.get() requests.
    // The entire operation will result in an error state if any single request fails.
    // getBooksAndMovies() {
    //     return Observable.forkJoin(
    //     this.http.get('/api/books'),
    //     this.http.get('/api/movies')
    //     );
    // }
    
}
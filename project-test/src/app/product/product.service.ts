import { Injectable } from '@angular/core';
import { IProduct } from './product';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import 'rxjs/add/observable/throw';


@Injectable()
export class ProductService {
    private _productUrl = '/api/products/products.json';


    constructor(private _http: HttpClient) {}
    getProducts(): Observable<IProduct[]> {
        return this._http.get<IProduct[]>(this._productUrl)
        .do(data => console.log('All: ' +  JSON.stringify(data)))
        .catch(this.handleError);
    }

    private handleError(error: HttpErrorResponse) {
        // in a real world app, we may send the server to some remote logging infrastructure
        // instead of just logging it to the console
        console.error(error);
        return Observable.throw(error.message);
    }
}

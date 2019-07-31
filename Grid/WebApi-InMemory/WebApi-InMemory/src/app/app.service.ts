import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { tap, catchError, map } from 'rxjs/operators';
import { Product } from './product/product';


@Injectable({
  providedIn: 'root'
})
export class AppService {

  apiurl = 'api/products';
  headers = new HttpHeaders().set('Content-Type', 'application/json').set('Accept', 'application/json');
  httpOptions = {
    headers: this.headers
  };

  constructor(private http: HttpClient) {

  }
  private handleError(error: any) {
    console.error(error);
    return throwError(error);
  }

  getProducts(): Observable<Product[]> {
    return this.http.get<Product[]>(this.apiurl).pipe(
      tap(data => console.log(data)),
      catchError(this.handleError)
    );
  }

  deleteProduct(id: number): Observable<Product> {
    const url = `${this.apiurl}/${id}`;
    return this.http.delete<Product>(url, this.httpOptions).pipe(
      catchError(this.handleError)
    );
  }

  addProduct(product: Product): Observable<Product> {
    return this.http.post<Product>(this.apiurl, product, this.httpOptions).pipe(
    tap(data =>  {
                   console.log(data);
                   console.log('record added');
    }),
    catchError(this.handleError)
  );
}

  updateProduct(product: Product): Observable<null | Product> {
    console.log(product);
    const url = `${this.apiurl}/${product.id}`;
    return this.http.put<Product>(url, product, this.httpOptions).pipe(
      tap(_ => {
        console.log(`updated product id = ${product.id}`);
      }),
      catchError(this.handleError)
    );
  }
}

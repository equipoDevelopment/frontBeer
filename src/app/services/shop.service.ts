import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of, catchError } from 'rxjs';
import { Product } from '../components/shop/shop';

@Injectable({
  providedIn: 'root'
})
export class ShopService {

  private url_get = 'http://localhost:3000/api/get_products';
  private url_gets = 'http://localhost:300/api/get_product_id';


  constructor(private httpClient:HttpClient) {}

  getProducts():Observable<Product[]>{
    return this.httpClient.get<Product[]>(this.url_get).pipe(catchError(this.handleError<any>('getProducts')));
  }

  private handleError<T>(operation = 'operation',result?:T){
    return (error:any):Observable<T>=>{
      // TODO: send the error to remote logging infrastructure
      console.error(error);// log to console instead
      // TODO: better job of transforming error for user consumption
      console.log(`${operation} failed: ${error.message}`);
      // Let the app keep running by returning an empty result.
      return of(result as T);
    }
  }

}

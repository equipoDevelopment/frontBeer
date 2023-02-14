import { Injectable } from '@angular/core';
import { ProductCard } from '../product-card';
import { HttpClient } from '@angular/common/http';
import { Observable, of, catchError} from 'rxjs';
import { Brand } from '../brand';
import { Product } from '../components/models/product';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  private readonly urlProd = environment.urlProd;
  private url_get=`${this.urlProd}/api/get_product/`;
  private url_brand=`${this.urlProd}/api/get_brands`;

  constructor(private httpClient:HttpClient) {}

  getProducts():Observable<ProductCard[]>{
    return this.httpClient.get<ProductCard[]>(this.url_get).pipe(catchError(this.handleError<any>('getProducts')));
  }
  getBrands():Observable<Brand[]>{
    return this.httpClient.get<Brand[]>(this.url_brand).pipe(catchError(this.handleError<any>('getBrands')));
  }

  getOneProduct(id: string): Observable<Product> {
    return this.httpClient.get<Product>(this.url_get+id).pipe(catchError(this.handleError<any>('getOneProduct')));
 }

  private handleError<T>(operation = 'opearation',result?:T){
    return (error:any):Observable<T>=>{
      console.error(error);
      console.log(`${operation} failed: ${error.message}`);
      return of(result as T);
    }
  }


}


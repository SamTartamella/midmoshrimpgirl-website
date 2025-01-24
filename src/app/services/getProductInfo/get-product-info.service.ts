import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { Product } from '../../models/product.model';
import { HttpClient } from '@angular/common/http';
import { GetProductResponse } from '../../models/getProductResponse.model';

@Injectable({
  providedIn: 'root',
})
export class GetProductInfoService {
  private apiUrl = "http://localhost:5032";  
  constructor(private http: HttpClient) {}

  getProductInfo(productUrlSnippet: string): Observable<Product> {
    return this.http.get<GetProductResponse>(`${this.apiUrl}/products/${productUrlSnippet}`)
      .pipe(map((response) => {
        return {
          productName: response.name,
          productPrice: response.price,
          productImagePath: response.imageLink
        } satisfies Product;
      }));
  }

  getProductInfoByName(productName: string): Observable<Product> {
    return this.http.get<GetProductResponse>(`${this.apiUrl}/products/by-name/${productName}`)
      .pipe(map((response) => {
        return {
          productName: response.name,
          productPrice: response.price,
          productImagePath: response.imageLink
        } satisfies Product;
      }));
  }
}

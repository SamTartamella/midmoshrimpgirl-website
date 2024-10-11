import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Product } from '../../models/product.model';

@Injectable({
  providedIn: 'root',
})
export class GetProductInfoService {
  constructor() {}

  getProductInfo(productName: string): Observable<Product> {
    switch (productName) {
      case 'red-cherry': {
        return of({
          productName: 'Red Cherry Shrimp',
          productPrice: 4.0,
        });
      }
      case 'Bloody Mary Shrimp': {
        return of({
          productName: 'Bloody Mary Shrimp',
          productPrice: 7.0,
        });
      }
      default: {
        return of({
          productName: 'ERROR',
          productPrice: 999,
        });
      }
    }
  }
}

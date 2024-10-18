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
          productImagePath: 'assets/websitepictures/redcherrysized.jpg',
        });
      }
      case 'bloody-mary': {
        return of({
          productName: 'Bloody Mary Shrimp',
          productPrice: 7.99,
          productImagePath: 'assets/websitepictures/bloodymaryresized.jpg',
        });
      }
      case 'galaxy-snowflake-blue': {
        return of({
          productName: 'Blue Galaxy Snowflake',
          productPrice: 10.0,
          productImagePath: 'assets/websitepictures/galaxysnowflakeblueresized.jpg',
        });
      }
      case 'panda-black': {
        return of({
          productName: 'Black Panda Shrimp',
          productPrice: 10.5,
          productImagePath: 'assets/websitepictures/pandablackresized.jpg'
        });
      }
      default: {
        return of({
          productName: 'ERROR',
          productPrice: 999,
          productImagePath: '/assets/whiteshrimp.png',
        });
      }
    }
  }
}

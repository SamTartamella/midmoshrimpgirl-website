import { Injectable } from '@angular/core';
import { map, Observable, of } from 'rxjs';
import { Product } from '../../models/product.model';
import { HttpClient } from '@angular/common/http';
import { GetProductByUrlStringResponse } from '../../models/getProductResponse.model';

@Injectable({
  providedIn: 'root',
})
export class GetProductInfoService {
  private apiUrl = "http://localhost:5032/";
  constructor(private http: HttpClient) {}

  getProductInfo(productUrlSnippet: string): Observable<Product> {

    return this.http.get<GetProductByUrlStringResponse>(`${this.apiUrl}products/${productUrlSnippet}`)
      .pipe(map((response) => {
        return {
          productName: response.name,
          productPrice: response.price,
          productImagePath: response.imageLink.replace(/\\\\/g, '\\') 
        } satisfies Product
      }));

    // switch (productName) {
    //   case 'red-cherry': {
    //     return of({
    //       productName: 'Red Cherry Shrimp',
    //       productPrice: 4.0,
    //       productImagePath: 'assets/websitepictures/redcherrysized1.jpg',
    //     });
    //   }
    //   case 'bloody-mary': {
    //     return of({
    //       productName: 'Bloody Mary Shrimp',
    //       productPrice: 7.99,
    //       productImagePath: 'assets/websitepictures/bloodymaryresized1.jpg',
    //     });
    //   }
    //   case 'galaxy-snowflake-blue': {
    //     return of({
    //       productName: 'Blue Galaxy Snowflake',
    //       productPrice: 10.0,
    //       productImagePath: 'assets/websitepictures/galaxysnowflakeblueresized1.jpg',
    //     });
    //   }
    //   case 'panda-black': {
    //     return of({
    //       productName: 'Black Panda Shrimp',
    //       productPrice: 10.5,
    //       productImagePath: 'assets/websitepictures/pandablackresized1.jpg'
    //     });
    //   }
    //   case 'susswassertang': {
    //     return of({
    //       productName: 'Süsswassertang',
    //       productPrice: 8.99,
    //       productImagePath: 'assets/websitepictures/Susswassertangresized.jpg'
    //     });
    //   }
    //   case 'duckweed': {
    //     return of({
    //       productName: 'Duckweed',
    //       productPrice: 5.99,
    //       productImagePath: 'assets/websitepictures/duckweed.jpg'
    //     });
    //   }
    //   case 'moss-java': {
    //     return of({
    //       productName: 'Java Moss',
    //       productPrice: 4.00,
    //       productImagePath: 'assets/websitepictures/javamoss.jpg'
    //     });
    //   }
    //   case 'alocasia-melo': {
    //     return of({
    //       productName: 'Alocaisa Melo',
    //       productPrice: 16.99,
    //       productImagePath: 'assets/websitepictures/alocasiamelo.jpg'
    //     });
    //   }
    //   case 'alocasia-ninja': {
    //     return of({
    //       productName: 'Alocaisa Ninja',
    //       productPrice: 18.99,
    //       productImagePath: 'assets/websitepictures/alocasianinja.jpg'
    //     });
    //   }
    //   case 'monstera-swiss-cheese': {
    //     return of({
    //       productName: 'Monstera Adansonii (Swiss Cheese)',
    //       productPrice: 12.99,
    //       productImagePath: 'assets/websitepictures/monsteraswisscheese.png'
    //     });
    //   }
    //   case 'monstera-thai-constellation': {
    //     return of({
    //       productName: 'Monstera Thai Constellation',
    //       productPrice: 30.99,
    //       productImagePath: 'assets/websitepictures/monsterathaiconstellation.jpg'
    //     });
    //   }
    //   case 'jade': {
    //     return of({
    //       productName: 'Jade',
    //       productPrice: 7.99,
    //       productImagePath: 'assets/websitepictures/jade.jpg'
    //     });
    //   }
    //   default: {
    //     return of({
    //       productName: 'ERROR',
    //       productPrice: 999,
    //       productImagePath: '/assets/whiteshrimp.png',
    //     });
    //   }
    // }
  }
}

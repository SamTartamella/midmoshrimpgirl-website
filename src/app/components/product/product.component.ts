import { Component, OnInit } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { GetProductInfoService } from '../../services/getProductInfo/get-product-info.service';
import { of, switchMap, take } from 'rxjs';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { Observable } from 'rxjs';
import { Product } from '../../models/product.model';

@Component({
  selector: 'app-product',
  standalone: true,
  imports: [MatButtonModule, MatCardModule],
  templateUrl: './product.component.html',
  styleUrl: './product.component.scss',
})
export class ProductComponent implements OnInit {
  constructor(
    private getProductInfoService: GetProductInfoService,
    private route: ActivatedRoute
  ) {}
  product: Observable<Product> = of();

  productName: string = 'Test';
  productPrice: number = 0.0;
  tempImagePath: string = '/assets/whiteshrimp.png';

  ngOnInit(): void {
    this.route.url
      .pipe(
        switchMap((urlSegmentArray) => {
          this.productName =
            urlSegmentArray[urlSegmentArray.length - 1].toString();
          return this.getProductInfoService.getProductInfo(this.productName);
        })
      )
      .subscribe((result) => (this.productName = result.productName));
  }
}

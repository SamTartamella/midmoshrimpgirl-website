import { Component, OnInit } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { GetProductInfoService } from '../../services/getProductInfo/get-product-info.service';
import { of, switchMap, take } from 'rxjs';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { Product } from '../../models/product.model';
import { CurrencyPipe } from '@angular/common';
import { ShoppingCartItem } from '../../models/shopping-cart-item.model';
import { GetCurrentShoppingCartService } from '../../services/getCurrentShoppingCart/get-current-shopping-cart';

@Component({
  selector: 'app-product',
  standalone: true,
  imports: [MatButtonModule, MatCardModule, CurrencyPipe],
  templateUrl: './product.component.html',
  styleUrl: './product.component.scss',
})
export class ProductComponent implements OnInit {
  constructor(
    private getProductInfoService: GetProductInfoService,
    private cartService: GetCurrentShoppingCartService,  
    public route: ActivatedRoute
  ) {}

  product: Product = {};  
  quantityCount: number = 1;
  totalPrice: number = 0;

  ngOnInit(): void {
    this.route.url
      .pipe(
        switchMap((urlSegmentArray) => {
          return this.getProductInfoService.getProductInfo(
            urlSegmentArray[urlSegmentArray.length - 1].toString()
          );
        })
      )
      .subscribe((result) => {
        this.quantityCount = 1;
        this.product = result;
        this.calculatePrice();
      });
  }

  increaseQuantity(): void {
    this.quantityCount++;
    this.calculatePrice();
  }

  decreaseQuantity(): void {
    if (this.quantityCount > 1) {
      this.quantityCount--;
      this.calculatePrice();
    }
  }

  calculatePrice(): void {
    this.totalPrice = this.quantityCount * this.product.productPrice!; //TODO: remove ! 
  }

  addToCart(): void {
    
    let newItem: ShoppingCartItem = {
      product: this.product, 
      quantity: this.quantityCount,
      total: this.totalPrice
    }
    this.cartService.addToCart(newItem);
  }

}

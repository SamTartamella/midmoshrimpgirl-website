import { Component, OnInit } from '@angular/core';
import {MatGridListModule} from '@angular/material/grid-list';
import { MatButtonModule } from '@angular/material/button';
import { RouterOutlet, RouterLink } from '@angular/router';
import {MatCardModule} from '@angular/material/card';
import { GetProductInfoService } from '../../services/getProductInfo/get-product-info.service';
import { first } from 'rxjs';
import { Product } from '../../models/product.model';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [MatGridListModule, MatButtonModule, RouterOutlet, RouterLink, MatCardModule, MatProgressSpinnerModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent implements OnInit {
  constructor(
    private getProductInfoService: GetProductInfoService
  ) {}
  isLoading = true;
  productOne: Product= {};
  productTwo: Product= {};
  productThree: Product= {};
  productFour: Product= {};
  
  async ngOnInit(): Promise<void> {
    this.isLoading = true;
    await this.loadImages();
    this.isLoading = false;
  }

  private async loadImages() : Promise<void> {
    this.productOne = this.getProductImage('Red Cherry Neocardinia');
    this.productTwo = this.getProductImage('Bloody Mary Neocardinia');
    this.productThree = this.getProductImage('Blue Galaxy Snowflake Cardinia');
    this.productFour = this.getProductImage('Black Panda Cardinia');
    await this.delay(100);
  }

  delay(ms: number): Promise<void> {
    return new Promise(resolve => setTimeout(resolve, ms));
  }

  getProductImage(name: string): Product {
    let product: Product = {};
    this.getProductInfoService.getProductInfoByName(name).pipe(first()).subscribe((result) => {
      product.productName = result.productName;
      product.productPrice = result.productPrice;
      product.productImagePath = result.productImagePath;
    });
    return product;
  }
}

import { Component, OnInit } from '@angular/core';
import { MatTableModule } from '@angular/material/table';
import { Product } from '../../models/product.model';
import { ShoppingCartItem } from '../../models/shopping-cart-item.model';
import { GetCurrentShoppingCartService } from '../../services/getCurrentShoppingCart/get-current-shopping-cart';

@Component({
  selector: 'app-shopping-cart',
  standalone: true,
  imports: [MatTableModule],
  templateUrl: './shopping-cart.component.html',
  styleUrl: './shopping-cart.component.scss'
})
export class ShoppingCartComponent implements OnInit {

  testProduct: Product = 
    {productName: 'Red Cherry Shrimp', productPrice: 4.0, productImagePath: 'assets/websitepictures/redcherrysized.jpg'};

  testShoppingCartItem: ShoppingCartItem = {product: this.testProduct, quantity: 5, total: (this.testProduct.productPrice * 5)};
  testShoppingCartItem2: ShoppingCartItem = {product: this.testProduct, quantity: 10, total: (this.testProduct.productPrice * 10)};

  columnsToDisplay: string[] = ['Product', 'Quantity', 'Total'];
  shoppingCartItems: ShoppingCartItem[] = [];

  constructor(private cartService: GetCurrentShoppingCartService) {

  }
  ngOnInit(): void {
    this.cartService.currentCartObservable.subscribe(updatedCart => this.shoppingCartItems = updatedCart);
  }
}

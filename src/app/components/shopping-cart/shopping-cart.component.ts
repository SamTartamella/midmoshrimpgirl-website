import { Component } from '@angular/core';
import { MatTableModule } from '@angular/material/table';
import { Product } from '../../models/product.model';
import { ShoppingCartItem } from '../../models/shopping-cart-item.model';

@Component({
  selector: 'app-shopping-cart',
  standalone: true,
  imports: [MatTableModule],
  templateUrl: './shopping-cart.component.html',
  styleUrl: './shopping-cart.component.scss'
})
export class ShoppingCartComponent {

  testProduct: Product = 
    {productName: 'Red Cherry Shrimp', productPrice: 4.0, productImagePath: 'assets/websitepictures/redcherrysized.jpg'};

  testShoppingCartItem: ShoppingCartItem = {product: this.testProduct, quantity: 5, total: (this.testProduct.productPrice * 5)};
  testShoppingCartItem2: ShoppingCartItem = {product: this.testProduct, quantity: 10, total: (this.testProduct.productPrice * 10)};

  columnsToDisplay: string[] = ['Product', 'Quantity', 'Total'];
  shoppingCartItems: ShoppingCartItem[] = [this.testShoppingCartItem, this.testShoppingCartItem2];
}

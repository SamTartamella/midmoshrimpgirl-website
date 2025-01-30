import { Component, OnInit } from '@angular/core';
import { MatTableModule } from '@angular/material/table';
import { ShoppingCartItem } from '../../../models/shopping-cart-item.model';
import { GetCurrentShoppingCartService } from '../../../services/getCurrentShoppingCart/get-current-shopping-cart';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { SelectionModel } from '@angular/cdk/collections';
import { MatCardModule } from '@angular/material/card';
import { CurrencyPipe } from '@angular/common';
import { RouterLink } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';


@Component({
  selector: 'app-shopping-cart',
  standalone: true,
  imports: [MatTableModule, MatCheckboxModule, MatCardModule, CurrencyPipe, RouterLink, MatButtonModule],
  templateUrl: './shopping-cart.component.html',
  styleUrl: './shopping-cart.component.scss'
})
export class ShoppingCartComponent implements OnInit {
  selection = new SelectionModel<ShoppingCartItem>(false, []); 

  columnsToDisplay: string[] = ['Product', 'Quantity', 'Total', 'Select'];
  shoppingCartItems: ShoppingCartItem[] = [];
  orderQuantity: number = 0; 
  orderTotal: number = 0;

  constructor(private cartService: GetCurrentShoppingCartService) {

  }
  ngOnInit(): void {
    this.cartService.currentCartObservable.subscribe(updatedCart => this.shoppingCartItems = updatedCart);
    this.updateOrderQuantity(); 
    this.updateOrderTotal();
  }

  toggleSelection(item: ShoppingCartItem) {
    
    this.selection.toggle(item); 
  }

  removeFromCart(item: ShoppingCartItem) {
    this.cartService.removeFromCart(item); 
    this.updateOrderQuantity();
    this.updateOrderTotal();
  }

  updateOrderQuantity() {
    this.orderQuantity = 0;
    this.shoppingCartItems.forEach((item) => this.orderQuantity = this.orderQuantity + item.quantity );
  }

  updateOrderTotal() {
    this.orderTotal = 0;
    this.shoppingCartItems.forEach((item) => this.orderTotal = this.orderTotal + item.total);
  }
}

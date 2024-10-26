import { Component, OnInit } from '@angular/core';
import { MatTableModule } from '@angular/material/table';
import { Product } from '../../models/product.model';
import { ShoppingCartItem } from '../../models/shopping-cart-item.model';
import { GetCurrentShoppingCartService } from '../../services/getCurrentShoppingCart/get-current-shopping-cart';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { SelectionModel } from '@angular/cdk/collections';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-shopping-cart',
  standalone: true,
  imports: [MatTableModule, MatCheckboxModule, MatButtonModule],
  templateUrl: './shopping-cart.component.html',
  styleUrl: './shopping-cart.component.scss'
})
export class ShoppingCartComponent implements OnInit {
  selection = new SelectionModel<ShoppingCartItem>(false, []); 

  columnsToDisplay: string[] = ['Product', 'Quantity', 'Total', 'Select'];
  shoppingCartItems: ShoppingCartItem[] = [];

  constructor(private cartService: GetCurrentShoppingCartService) {

  }
  ngOnInit(): void {
    this.cartService.currentCartObservable.subscribe(updatedCart => this.shoppingCartItems = updatedCart);
  }

  toggleSelection(item: ShoppingCartItem) {
    
    this.selection.toggle(item); 
  }

  removeFromCart(item: ShoppingCartItem) {
    this.cartService.removeFromCart(item); 
  }
}

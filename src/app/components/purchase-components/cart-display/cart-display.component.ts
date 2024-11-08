import { Component } from '@angular/core';
import { ShoppingCartComponent } from "../shopping-cart/shopping-cart.component";
import { RouterLink } from '@angular/router';
import { GetCurrentShoppingCartService } from '../../../services/getCurrentShoppingCart/get-current-shopping-cart';
import { ShoppingCartItem } from '../../../models/shopping-cart-item.model';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-cart-display',
  standalone: true,
  imports: [ShoppingCartComponent, RouterLink, MatButtonModule],
  templateUrl: './cart-display.component.html',
  styleUrl: './cart-display.component.scss'
})
export class CartDisplayComponent {
  shoppingCartItems: ShoppingCartItem[] = [];
  
constructor(private cartService: GetCurrentShoppingCartService) {

}

ngOnInit(): void {
  this.cartService.currentCartObservable.subscribe(updatedCart => this.shoppingCartItems = updatedCart);
}
}

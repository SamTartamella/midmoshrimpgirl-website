import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { ShoppingCartItem } from '../../models/shopping-cart-item.model';

@Injectable({
  providedIn: 'root'
})
export class GetCurrentShoppingCartService {

  constructor() { }

  emptyCart : ShoppingCartItem[] = []; 
  currentShoppingCart = new BehaviorSubject<ShoppingCartItem[]>(this.emptyCart);  
  currentCartObservable = this.currentShoppingCart.asObservable(); 

  updateCart(newCartItem : ShoppingCartItem) //in the future do this one by one and just add on? avoid copying?
  {
    this.currentShoppingCart.value.push(newCartItem); 
    this.currentShoppingCart.next(this.currentShoppingCart.value); 
  }
}

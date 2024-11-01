import { Injectable } from '@angular/core';
import { BehaviorSubject, first } from 'rxjs';
import { ShoppingCartItem } from '../../models/shopping-cart-item.model';


@Injectable({
  providedIn: 'root'
})
export class GetCurrentShoppingCartService {

  constructor() { }

  emptyCart : ShoppingCartItem[] = []; 
  currentShoppingCart = new BehaviorSubject<ShoppingCartItem[]>(this.emptyCart);  
  currentCartObservable = this.currentShoppingCart.asObservable(); 

  addToCart(newCartItem : ShoppingCartItem)
  {
    let isincart = false; 
    this.currentShoppingCart.value.forEach((item) => {
      if (item.product.productName == newCartItem.product.productName)
      {
        item.quantity = item.quantity + newCartItem.quantity; 
        item.total = item.total + newCartItem.total; 
        isincart = true;
      }
    })

    if(isincart)
    {
      return; 
    }
    else 
    {
      this.currentShoppingCart.value.push(newCartItem); 
      this.currentShoppingCart.next(this.currentShoppingCart.value); 
    }
  }

  removeFromCart(itemToRemove : ShoppingCartItem)
  {
    let newCart: ShoppingCartItem[]; 
    newCart = this.currentShoppingCart.value.filter(item => GetCurrentShoppingCartService.isNotEqual(item, itemToRemove));
    this.currentShoppingCart.next(newCart);
  }

  static isNotEqual(firstItem: ShoppingCartItem, secondItem: ShoppingCartItem) : boolean {
    if(firstItem.product.productName == secondItem.product.productName &&
      firstItem.product.productPrice == secondItem.product.productPrice &&
      firstItem.product.productImagePath == secondItem.product.productImagePath &&
      firstItem.quantity == secondItem.quantity &&
      firstItem.total == secondItem.total) {
        return false;
      }
    return true;
  }

    
    
  
}

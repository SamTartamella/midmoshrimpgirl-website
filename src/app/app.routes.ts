import { Routes } from '@angular/router';
import { ProductComponent } from './components/product/product.component';
import { HomeComponent } from './components/home/home.component';
import { ShoppingCartComponent } from './components/purchase-components/shopping-cart/shopping-cart.component';
import { CheckoutComponent } from './components/purchase-components/checkout/checkout.component';
import { CartDisplayComponent } from './components/purchase-components/cart-display/cart-display.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'products/:item', component: ProductComponent }, //Will make product component. Template for product, info filled in from DB eventually.
  { path: 'cart', component: CartDisplayComponent },
  { path: 'checkout', component: CheckoutComponent}
];

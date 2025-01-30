import { Routes } from '@angular/router';
import { ProductComponent } from './components/product/product.component';
import { HomeComponent } from './components/home/home.component';
import { ShoppingCartComponent } from './components/purchase-components/shopping-cart/shopping-cart.component';
import { CheckoutComponent } from './components/purchase-components/checkout/checkout.component';
import { CartDisplayComponent } from './components/purchase-components/cart-display/cart-display.component';
import { ContactComponent } from './components/contact/contact.component';
import { AboutComponent } from './components/about/about.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'products/:item', component: ProductComponent }, 
  { path: 'cart', component: CartDisplayComponent },
  { path: 'checkout', component: CheckoutComponent},
  { path: 'contact', component: ContactComponent},
  { path: 'about', component: AboutComponent}
];

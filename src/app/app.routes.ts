import { Routes } from '@angular/router';
import { ProductComponent } from './components/product/product.component';
import { HomeComponent } from './components/home/home.component';

export const routes: Routes = [
  //   { path: 'red-cherry', component: ProductComponent },
  { path: '', component: HomeComponent },
  { path: 'products/:item', component: ProductComponent }, //Will make product component. Template for product, info filled in from DB eventually.
];

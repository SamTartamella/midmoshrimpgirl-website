import { Routes } from '@angular/router';
import { RedCherryProductComponent } from './components/red-cherry-product/red-cherry-product.component';
import { HomeComponent } from './components/home/home.component';

export const routes: Routes = [
  //   { path: 'red-cherry', component: RedCherryProductComponent },
  { path: '', component: HomeComponent },
  { path: 'products/:item', component: RedCherryProductComponent }, //Will make product component. Template for product, info filled in from DB eventually.
];

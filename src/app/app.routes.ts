import { Routes } from '@angular/router';
import { RedCherryProductComponent } from './components/red-cherry-product/red-cherry-product.component';
import { MainComponent } from './components/main/main.component';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';

export const routes: Routes = [
  { path: 'red-cherry', component: RedCherryProductComponent },
  { path: '', component: HomeComponent },
];

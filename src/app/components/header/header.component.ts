import { Component, OnInit } from '@angular/core';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatCardModule } from '@angular/material/card';
import { MatDividerModule } from '@angular/material/divider';
import { MatButtonModule } from '@angular/material/button';
import { RouterOutlet, RouterLink, Router } from '@angular/router';
import { MatIconModule } from '@angular/material/icon';
import {MatBadgeModule} from '@angular/material/badge';
import { GetCurrentShoppingCartService } from '../../services/getCurrentShoppingCart/get-current-shopping-cart';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [
    MatButtonToggleModule,
    MatCardModule,
    MatDividerModule,
    MatButtonModule,
    RouterLink,
    RouterOutlet,
    MatIconModule,
    MatBadgeModule,
  ],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent implements OnInit {
  imagePath: string = 'assets/whiteshrimp.png';
  numberOfCartItems: number | string = ''; 

  constructor(private cartService: GetCurrentShoppingCartService) {

  }
  ngOnInit(): void {
    this.cartService.currentCartObservable.subscribe(currentCart => this.numberOfCartItems = currentCart.length);

    if(this.numberOfCartItems === 0)
    {
      this.numberOfCartItems = '';
    }
  }
}

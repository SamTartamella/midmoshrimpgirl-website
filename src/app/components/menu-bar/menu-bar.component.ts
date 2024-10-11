import { Component } from '@angular/core';
import { MatMenuModule } from '@angular/material/menu';
import { MatButtonModule } from '@angular/material/button';
import { RouterOutlet, RouterLink } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { Observable, of } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { Product } from '../../models/product.model';
import { GetProductInfoService } from '../../services/getProductInfo/get-product-info.service';

@Component({
  selector: 'app-menu-bar',
  standalone: true,
  imports: [MatMenuModule, MatButtonModule, RouterOutlet, RouterLink],
  templateUrl: './menu-bar.component.html',
  styleUrl: './menu-bar.component.scss',
})
export class MenuBarComponent {
  constructor() {}
}

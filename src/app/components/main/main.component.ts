import { Component } from '@angular/core';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatCardModule } from '@angular/material/card';
import { MatDividerModule } from '@angular/material/divider';
import { MatButtonModule } from '@angular/material/button';
import { RouterOutlet, RouterLink, Router } from '@angular/router';

@Component({
  selector: 'app-main',
  standalone: true,
  imports: [
    MatButtonToggleModule,
    MatCardModule,
    MatDividerModule,
    MatButtonModule,
    RouterLink,
    RouterOutlet,
  ],
  templateUrl: './main.component.html',
  styleUrl: './main.component.scss',
})
export class MainComponent {
  imagePath: string = '/assets/whiteshrimp.png';
}

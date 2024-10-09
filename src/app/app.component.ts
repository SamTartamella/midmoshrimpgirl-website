import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MainComponent } from './components/main/main.component';
import { MenuBarComponent } from './components/menu-bar/menu-bar.component';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, MainComponent, MenuBarComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'midmoshrimpgirl-website';
}

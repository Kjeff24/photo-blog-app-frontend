import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { DockMenuComponent } from './components/dock-menu/dock-menu.component';

@Component({
  selector: 'app-root',
  imports: [CommonModule, RouterOutlet, DockMenuComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'photo-blog-app-frontend';
}

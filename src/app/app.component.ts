import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { DockMenuComponent } from './components/dock-menu/dock-menu.component';
import { ToastrComponent } from "./components/toastr/toastr.component";

@Component({
  selector: 'app-root',
  imports: [CommonModule, RouterOutlet, DockMenuComponent, ToastrComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'photo-blog-app-frontend';
}

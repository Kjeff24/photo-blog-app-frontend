import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MenuItem } from 'primeng/api';
import { Dock } from 'primeng/dock';
import { TooltipModule } from 'primeng/tooltip';

@Component({
  selector: 'app-dock-menu',
  imports: [Dock, CommonModule, FormsModule, TooltipModule],
  templateUrl: './dock-menu.component.html',
  styleUrl: './dock-menu.component.css'
})
export class DockMenuComponent {
  @Input() items: MenuItem[] = [];
  position: 'bottom' | 'top' | 'left' | 'right' = 'bottom';

}

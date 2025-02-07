import { CommonModule } from '@angular/common';
import { Component, ElementRef, EventEmitter, HostListener, Input, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MenuItem } from '../models/photo-blog';

@Component({
  selector: 'app-dock-menu',
  imports: [CommonModule, FormsModule],
  templateUrl: './dock-menu.component.html',
  styleUrl: './dock-menu.component.css'
})
export class DockMenuComponent {
  @Input() items: MenuItem[] = [];
  @Output() menuItemClick = new EventEmitter<{ item: string}>();
  position: 'bottom' | 'top' | 'left' | 'right' = 'bottom';

  
  constructor(private el: ElementRef) {}

  onMenuItemClick(item: string): void {
    console.log(item)
    this.menuItemClick.emit({item});
  }

  @HostListener('click')
  onClick(): void {
    this.el.nativeElement.blur();
  }
}

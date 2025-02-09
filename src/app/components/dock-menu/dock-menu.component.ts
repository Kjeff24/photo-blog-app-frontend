import { CommonModule } from '@angular/common';
import { Component, ElementRef, EventEmitter, HostListener, Input, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MenuItem } from '../../models/photo-blog';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dock-menu',
  imports: [CommonModule, FormsModule],
  templateUrl: './dock-menu.component.html',
  styleUrl: './dock-menu.component.css'
})
export class DockMenuComponent {
  position: string = 'right';
  activeUrl: string = '';
  menuItems: MenuItem[] = [
      {
        label: 'Home',
        icon: 'assets/svg/home.svg',
        url: '/',
      },
      {
        label: 'My Photos',
        icon: 'assets/svg/photos.svg',
        url: '/photos',
      },
      {
        label: 'Upload Photo',
        icon: 'assets/svg/upload.svg',
        url: '/upload',
      },
      {
        label: 'Trash',
        icon: 'assets/svg/trash.svg',
        url: '/recycle-bin',
      },
    ];

  
  constructor(private el: ElementRef, private router: Router) {}

  onMenuItemClick(url: string): void {
    this.activeUrl = url;
    this.router.navigate([`${url}`]);
  }

}

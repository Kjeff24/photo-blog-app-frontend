import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-image-preview-dock-menu',
  imports: [CommonModule],
  templateUrl: './image-preview-dock-menu.component.html',
  styleUrl: './image-preview-dock-menu.component.css'
})
export class ImagePreviewDockMenuComponent {
  @Input() rotate: number = 0;
  @Input() imageUrl?: string;
  @Output() rotateChange = new EventEmitter<number>();
  @Output() zoomChange = new EventEmitter<number>();
  @Output() closePreview = new EventEmitter<void>();

  menuItems= [
    { icon: 'assets/svg/rotate-left.svg', action: 'left' },
    { icon: 'assets/svg/rotate-right.svg', action: 'right' },
    { icon: 'assets/svg/close.svg', action: 'close' }
  ];

  onActionClick(action: string): void {
    if (action === 'left' || action === 'right') {
      this.rotateImage(action);
    } else if (action === 'close') {
      this.closePreviewMenu();
    }
  }

  rotateImage(direction: string): void {
    if (direction === 'left') {
      this.rotate -= 90;
    } else if (direction === 'right') {
      this.rotate += 90;
    }
    this.rotateChange.emit(this.rotate);
  }


  closePreviewMenu(): void {
    this.closePreview.emit();
  }
}

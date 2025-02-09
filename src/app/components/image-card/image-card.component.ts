import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { BlogPost, MenuItem } from '../../models/photo-blog';
import { ImagePreviewDockMenuComponent } from '../image-preview-dock-menu/image-preview-dock-menu.component';

@Component({
  selector: 'app-image-card',
  imports: [CommonModule, ImagePreviewDockMenuComponent],
  templateUrl: './image-card.component.html',
  styleUrl: './image-card.component.css',
})
export class ImageCardComponent {
  isPreviewOpen = false;
  previewIndex: string = '';
  rotate: number = 0;
  @Input() menuItems: MenuItem[] = [];
  @Input() blogPost?: BlogPost;
  @Input() page: string = '';
  @Output() menuItemClick = new EventEmitter<{ item: string, blogPost: BlogPost | null }>();

  openPreview(): void {
    if (this.blogPost?.photoId) {
      this.previewIndex = this.blogPost.photoId;
      this.isPreviewOpen = true;
    }
  }

  closePreview(): void {
    this.isPreviewOpen = false;
    this.resetImageSettings();
  }

  resetImageSettings(): void {
    this.rotate = 0;
  }

  onRotateChange(newRotate: number): void {
    this.rotate = newRotate;
  }

  onClosePreview(): void {
    this.closePreview();
  }
}

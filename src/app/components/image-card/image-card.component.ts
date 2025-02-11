import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { BlogPost, CardMenuItem, MenuItem } from '../../models/photo-blog';
import { ImagePreviewDockMenuComponent } from '../image-preview-dock-menu/image-preview-dock-menu.component';
import { ModalComponent } from '../modal/modal.component';

@Component({
  selector: 'app-image-card',
  imports: [CommonModule, ImagePreviewDockMenuComponent, ModalComponent],
  templateUrl: './image-card.component.html',
  styleUrl: './image-card.component.css',
})
export class ImageCardComponent {
  isPreviewOpen = false;
  previewIndex: string = '';
  rotate: number = 0;
  isModalOpen = false;
  selectedItem?: CardMenuItem;
  @Input() menuItems: CardMenuItem[] = [];
  @Input() blogPost?: BlogPost;
  @Input() page: string = '';
  @Output() menuItemClick = new EventEmitter<{ label: string }>();

  openPreview(): void {
    if (this.blogPost?.pk) {
      this.previewIndex = this.blogPost.pk;
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

  openModal(item: CardMenuItem): void {
    this.selectedItem = item;
    this.isModalOpen = true;
  }

  closeModal(): void {
    this.isModalOpen = false;
    this.selectedItem = undefined;
  }

  modalContinueResponse(label?: string): void {
    if(this.blogPost && label) {
      this.menuItemClick.emit({label: label})
    }
  }
}

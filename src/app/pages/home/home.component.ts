import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ImagePreviewDockMenuComponent } from '../../components/image-preview-dock-menu/image-preview-dock-menu.component';
import { BlogPost } from '../../models/photo-blog';
import { PhotoBlogService } from '../../services/photo-blog-service/photo-blog.service';

@Component({
  selector: 'app-home',
  imports: [CommonModule, FormsModule, ImagePreviewDockMenuComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent {
  isPreviewOpen = false;
  previewIndex: number = 0;
  rotate: number = 0;
  items = Array.from({ length: 15 }, (_, i) => i);
  blogPost: BlogPost[] = [];

  constructor(private photoBlogService: PhotoBlogService) {}

  ngOnInit(): void {
    this.getAllBlogPosts();
  }

  openPreview(index: number): void {
    this.previewIndex = index;
    this.isPreviewOpen = true;
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

  getAllBlogPosts(): void {
    this.photoBlogService.getAllBlogPosts().subscribe({
      next: (data: BlogPost[]) => {
        this.blogPost = data;
        console.log(data);
      },
      error: (err) => {
        console.log(err);
      },
    });
  }
}

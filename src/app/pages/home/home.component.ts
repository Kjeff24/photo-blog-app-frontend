import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { BlogPost, MenuItem } from '../../models/photo-blog';
import { TokenResponse } from '../../models/token-response';
import { PhotoBlogService } from '../../services/photo-blog-service/photo-blog.service';
import { TokenService } from '../../services/token/token.service';
import { DockMenuComponent } from '../../dock-menu/dock-menu.component';
import { ImagePreviewDockMenuComponent } from '../../components/image-preview-dock-menu/image-preview-dock-menu.component';

@Component({
  selector: 'app-home',
  imports: [CommonModule, FormsModule, ImagePreviewDockMenuComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent {
  code = '';
  isPreviewOpen = false;
  previewIndex: number = 0;
  rotate: number = 0;
  items = Array.from({ length: 15 }, (_, i) => i);
  blogPost: BlogPost[] = [];

  constructor(
    private tokenService: TokenService,
    private activatedRoute: ActivatedRoute,
    private photoBlogService: PhotoBlogService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.activatedRoute.queryParams.subscribe((data) => {
      this.code = data['code'];
      if (this.code) {
        this.getToken(this.code);
      } else if (!this.tokenService.isLoggedIn()) {
        this.tokenService.login();
      } else {
        this.getAllBlogPosts();
      }
    });
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

  getToken(code: string): void {
    this.tokenService.getToken(this.code).subscribe({
      next: (data: TokenResponse) => {
        this.tokenService.setTokens(data.id_token);
        this.router.navigate(['/']);
      },
      error: (err) => {
        console.log(err);
      },
    });
  }

  getAllBlogPosts(): void {
    this.photoBlogService.getAllBlogPosts().subscribe({
      next: (data: BlogPost[]) => {
        this.blogPost = data;
      },
      error: (err) => {
        console.log(err);
      },
    });
  }
}

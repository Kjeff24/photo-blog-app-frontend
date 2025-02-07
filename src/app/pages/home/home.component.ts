import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { MenuItem } from 'primeng/api';
import { BlogPost } from '../../models/photo-blog';
import { TokenResponse } from '../../models/token-response';
import { PhotoBlogService } from '../../services/photo-blog-service/photo-blog.service';
import { TokenService } from '../../services/token/token.service';
import { DockMenuComponent } from '../../components/dock-menu/dock-menu.component';

@Component({
  selector: 'app-home',
  imports: [CommonModule, FormsModule, DockMenuComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent {
  code = '';
  blogPost: BlogPost[] = [];
  items: MenuItem[] = [
    {
      label: 'Home',
      icon: 'assets/svg/home.svg',
    },
    {
      label: 'My Photos',
      icon: 'assets/svg/photos.svg',
    },
    {
      label: 'Trash',
      icon: 'assets/svg/trash.svg',
    },
  ];

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

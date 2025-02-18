import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ImageCardComponent } from '../../components/image-card/image-card.component';
import { BlogPost, CardMenuItem } from '../../models/photo-blog';
import { PhotoBlogService } from '../../services/photo-blog-service/photo-blog.service';

@Component({
  selector: 'app-home',
  imports: [CommonModule, FormsModule, ImageCardComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent {
  menuItems: CardMenuItem[] = []
  blogPosts: BlogPost[] = [];
  isEmpty: boolean = false;

  constructor(private photoBlogService: PhotoBlogService) {}

  ngOnInit(): void {
    this.getAllBlogPosts();
  }

  menuItemClickResponse(blogPost: BlogPost, event: {label: string}) {
    console.log(event)
  }

  getAllBlogPosts(): void {
    this.photoBlogService.getAllBlogPosts().subscribe({
      next: (data: BlogPost[]) => {
        this.blogPosts = data;
        if (!this.blogPosts || this.blogPosts.length === 0) {
          this.isEmpty = true;
        } else {
          this.isEmpty = false;
        }
      },
      error: (err) => {
        console.log(err);
      },
    });
  }
}

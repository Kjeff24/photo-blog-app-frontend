import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ImageCardComponent } from '../../components/image-card/image-card.component';
import { BlogPost, CardMenuItem, MenuItem } from '../../models/photo-blog';
import { PhotoBlogService } from '../../services/photo-blog-service/photo-blog.service';

@Component({
  selector: 'app-home',
  imports: [CommonModule, FormsModule, ImageCardComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent {
  menuItems: CardMenuItem[] = []
  blogPosts: BlogPost[] = [
    {
      photoId: '1',
      owner: 'john_doe',
      fullName: 'John Doe',
      ImageUrl:
        'https://primefaces.org/cdn/primeng/images/galleria/galleria10.jpg',
      temporaryImageUrl:
        'https://primefaces.org/cdn/primeng/images/galleria/galleria10.jpg',
      uploadDate: '2024-02-09',
    },
    {
      photoId: '2',
      owner: 'jane_smith',
      fullName: 'Jane Smith',
      ImageUrl:
        'https://primefaces.org/cdn/primeng/images/galleria/galleria11.jpg',
      temporaryImageUrl:
        'https://primefaces.org/cdn/primeng/images/galleria/galleria12.jpg',
      uploadDate: '2024-02-08',
    },
    {
      photoId: '3',
      owner: 'alice_wonder',
      fullName: 'Alice Wonderland',
      ImageUrl:
        'https://primefaces.org/cdn/primeng/images/galleria/galleria12.jpg',
      temporaryImageUrl:
        'https://primefaces.org/cdn/primeng/images/galleria/galleria12.jpg',
      uploadDate: '2024-02-07',
    },
  ];

  constructor(private photoBlogService: PhotoBlogService) {}

  ngOnInit(): void {
    this.getAllBlogPosts();
  }

  menuItemClickResponse(blogPost: BlogPost, event: {label: string}) {
    console.log(blogPost);
    console.log(event)
  }

  getAllBlogPosts(): void {
    this.photoBlogService.getAllBlogPosts().subscribe({
      next: (data: BlogPost[]) => {
        // this.blogPosts = data;
      },
      error: (err) => {
        console.log(err);
      },
    });
  }
}

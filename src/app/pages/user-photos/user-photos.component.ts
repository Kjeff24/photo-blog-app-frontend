import { Component } from '@angular/core';
import { ImageCardComponent } from '../../components/image-card/image-card.component';
import { CommonModule } from '@angular/common';
import { BlogPost } from '../../models/photo-blog';

@Component({
  selector: 'app-user-photos',
  imports: [CommonModule, ImageCardComponent],
  templateUrl: './user-photos.component.html',
  styleUrl: './user-photos.component.css'
})
export class UserPhotosComponent {
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

}

import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ImageCardComponent } from '../../components/image-card/image-card.component';
import { BlogPost, CardMenuItem, MenuItem } from '../../models/photo-blog';

@Component({
  selector: 'app-recycle-bin',
  imports: [CommonModule, ImageCardComponent],
  templateUrl: './recycle-bin.component.html',
  styleUrl: './recycle-bin.component.css',
})
export class RecycleBinComponent {
  menuItems: CardMenuItem[] = [
    {
      label: 'Restore',
      icon: 'assets/svg/restore.svg',
      notificationMessage: 'Do you want to restore blog?'
    },
    {
      label: 'Delete',
      icon: 'assets/svg/delete.svg',
      notificationMessage: 'Do you want to delete blog permanently?'
    },
  ]
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

  menuItemClickResponse(blogPost: BlogPost, event: {label: string}) {
    console.log(blogPost);
    console.log(event)
  }
}

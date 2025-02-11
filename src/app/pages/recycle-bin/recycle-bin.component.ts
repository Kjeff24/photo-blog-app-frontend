import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ImageCardComponent } from '../../components/image-card/image-card.component';
import { MenuLabel } from '../../models/menu-items';
import { BlogPost, CardMenuItem, MessageResponse } from '../../models/photo-blog';
import { PhotoBlogService } from '../../services/photo-blog-service/photo-blog.service';

@Component({
  selector: 'app-recycle-bin',
  imports: [CommonModule, ImageCardComponent],
  templateUrl: './recycle-bin.component.html',
  styleUrl: './recycle-bin.component.css',
})
export class RecycleBinComponent {
  menuItems: CardMenuItem[] = [
    {
      label: MenuLabel.RESTORE,
      icon: 'assets/svg/restore.svg',
      notificationMessage: 'Do you want to restore blog?'
    },
    {
      label: MenuLabel.DELETE,
      icon: 'assets/svg/delete.svg',
      notificationMessage: 'Do you want to delete blog permanently?'
    },
  ]
  blogPosts: BlogPost[] = [];

  constructor(private photoBlogService: PhotoBlogService){}

  ngOnInit(): void {
    this.getRecycledItems();
  }

  menuItemClickResponse(blogPost: BlogPost, event: {label: string}) {
    if(event.label === MenuLabel.RESTORE) {
      this.restoreItem(blogPost.pk)
    } else if(event.label === MenuLabel.DELETE) {
      this.deleteItem(blogPost.pk)
    }
  }

  getRecycledItems(): void {
    this.photoBlogService.getRecycleBlogPostByUser().subscribe({
      next: (data: BlogPost[]) => {
        this.blogPosts = data;
      },
      error: (error: MessageResponse) => {
        console.log(error.message);
      },
    });
  }

  restoreItem(photoId: string){
    this.photoBlogService.restoreFromRecycleBin(photoId).subscribe({
      next: () => {
        this.blogPosts = this.blogPosts.filter(post => post.pk !== photoId);
      },
      error: (error: MessageResponse) => {
        console.log(error.message)
      }
    })
  }

  deleteItem(photoId: string){
    this.photoBlogService.deletBogPost(photoId).subscribe({
      next: () => {
        this.blogPosts = this.blogPosts.filter(post => post.pk !== photoId);
      },
      error: (error: MessageResponse) => {
        console.log(error.message)
      }
    })
  }
}

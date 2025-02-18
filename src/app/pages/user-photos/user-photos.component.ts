import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { CopyUrlModalComponent } from '../../components/copy-url-modal/copy-url-modal.component';
import { ImageCardComponent } from '../../components/image-card/image-card.component';
import { MenuLabel } from '../../models/menu-items';
import { BlogPost, CardMenuItem, PreSignedUrlResponse } from '../../models/photo-blog';
import { PhotoBlogService } from '../../services/photo-blog-service/photo-blog.service';
import { ToastrService } from '../../services/toastr/toastr.service';

@Component({
  selector: 'app-user-photos',
  imports: [CommonModule, ImageCardComponent, CopyUrlModalComponent],
  templateUrl: './user-photos.component.html',
  styleUrl: './user-photos.component.css',
})
export class UserPhotosComponent {
  menuItems: CardMenuItem[] = [
    {
      label: MenuLabel.SHARE,
      icon: 'assets/svg/share.svg',
      notificationMessage: 'Do you want to generate temporary url?',
    },
    {
      label: MenuLabel.TRASH,
      icon: 'assets/svg/recycle.svg',
      notificationMessage: 'Do you want to move item to trash?',
    },
  ];
  blogPosts: BlogPost[] = [];
  preSignedUrl: string = '';
  showCopyUrlModal: boolean = false;
  isEmpty: boolean = false;

  constructor(private photoBlogService: PhotoBlogService, private toastrService: ToastrService) {}

  ngOnInit(): void {
    this.getAllBlogPostsByUser();
  }

  menuItemClickResponse(blogPost: BlogPost, event: { label: string }) {
    if(event.label === MenuLabel.SHARE) {
      this.generateTemporaryUrl(blogPost.pk);
    } else if(event.label === MenuLabel.TRASH) {
      this.moveToTrash(blogPost.pk);
    }
  }

  closeModal(): void {
    this.showCopyUrlModal = false;
  }

  getAllBlogPostsByUser(): void {
    this.photoBlogService.getAllBlogPostsByUser().subscribe({
      next: (data: BlogPost[]) => {
        this.blogPosts = data;
        this.updateIsEmptyStatus();
      },
      error: (err) => {
        console.log(err);
      },
    });
  }

  generateTemporaryUrl(photoId: string): void {
    this.photoBlogService.generateTemporaryUrl(photoId).subscribe({
      next: (data: PreSignedUrlResponse) => {
        this.preSignedUrl = data.url
        this.showCopyUrlModal = true;
      },
      error: (err) => {
        console.log(err);
      },
    });
  }

  moveToTrash(photoId: string): void {
    this.photoBlogService.moveToRecycleBin(photoId).subscribe({
      next: () => {
        this.blogPosts = this.blogPosts.filter(post => post.pk !== photoId);
        this.updateIsEmptyStatus();
        this.toastrService.showSuccess('Blog post has been moved to trash.')
      },
      error: (err) => {
        console.log(err);
      },
    });
  }
  
  private updateIsEmptyStatus(): void {
    this.isEmpty = !this.blogPosts || this.blogPosts.length === 0;
  }
}

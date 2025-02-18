import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { PhotoBlogService } from '../../services/photo-blog-service/photo-blog.service';
import { BlogPost, ImageUploadRequest, MessageResponse } from '../../models/photo-blog';
import { ToastrService } from '../../services/toastr/toastr.service';

@Component({
  selector: 'app-image-upload',
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './image-upload.component.html',
  styleUrl: './image-upload.component.css',
})
export class ImageUploadComponent {
  uploadForm: FormGroup;
  imagePreview: string | ArrayBuffer | null = null;
  isDragging = false;
  isSubmitting = false;

  constructor(private fb: FormBuilder, private photoBlogService: PhotoBlogService, private toastrService: ToastrService) {
    this.uploadForm = this.fb.group({
      image: [null, Validators.required],
    });
  }

  onFileChange(event: Event) {
    const fileInput = event.target as HTMLInputElement;
    if (fileInput.files && fileInput.files.length > 0) {
      const file = fileInput.files[0];
      this.processFile(file);
    }
  }

  processFile(file: File) {
    const maxSize = 2 * 1024 * 1024;
    if (file.size > maxSize) {
      alert('File size should not exceed 2MB.');
      return;
    }

    const allowedTypes = [
      'image/png',
      'image/jpeg',
      'image/gif',
      'image/bmp',
      'image/tiff',
      'image/webp',
    ];
    if (!allowedTypes.includes(file.type)) {
      alert(
        'Invalid file type! Please upload a PNG, JPG, GIF, BMP, TIFF, or WEBP.'
      );
      return;
    }

    const reader = new FileReader();
    reader.onload = () => {
      this.imagePreview = reader.result;
      const base64String = reader.result?.toString().split(',')[1];

      this.uploadForm.patchValue({
        image: base64String,
      });
    };

    reader.readAsDataURL(file);
  }

  onSubmit() {
    if (this.uploadForm.valid) {
      this.isSubmitting = true; 
      const uploadImageRequest: ImageUploadRequest = {
        imageBase64: this.uploadForm.get('image')?.value
      }
      this.uploadImage(uploadImageRequest)
    } else {
      alert('Please select an image to upload.');
    }
  }

  onDragOver(event: DragEvent) {
    event.preventDefault();
    event.stopPropagation();
    this.isDragging = true;
  }

  onDragEnter(event: DragEvent) {
    event.preventDefault();
    event.stopPropagation();
    this.isDragging = true;
  }

  onDragLeave(event: DragEvent) {
    event.preventDefault();
    event.stopPropagation();
    this.isDragging = false;
  }

  onDrop(event: DragEvent) {
    event.preventDefault();
    event.stopPropagation();
    this.isDragging = false;

    const files = event.dataTransfer?.files;
    if (files && files.length > 0) {
      const file = files[0];
      this.processFile(file);
    }
  }

  uploadImage(imageUploadRequest: ImageUploadRequest) {
    this.photoBlogService.uploadImage(imageUploadRequest).subscribe({
      next: (blogPost: BlogPost) => {
        this.imagePreview= blogPost.imageUrl;
        this.isSubmitting = false;
        this.uploadForm.reset();
        this.toastrService.showSuccess('Image uploaded successfully.')
      },
      error: (error: MessageResponse) => {
        this.isSubmitting = false; 
        console.log(error.message)
      }
    })
  }
}

import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';

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

  constructor(private fb: FormBuilder) {
    this.uploadForm = this.fb.group({
      image: [null],
    });
  }
// Handle file input change
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
    alert('Invalid file type! Please upload a PNG, JPG, GIF, BMP, TIFF, or WEBP.');
    return;
  }

  this.uploadForm.patchValue({
    image: file,
  });

  const reader = new FileReader();
  reader.onload = () => {
    this.imagePreview = reader.result;
  };
  reader.readAsDataURL(file);
}

onSubmit() {
  if (this.uploadForm.valid) {
    const formData = new FormData();
    formData.append('image', this.uploadForm.get('image')?.value);

    console.log('Form Data:', formData);
    alert('Image uploaded successfully!');
  } else {
    alert('Please select an image to upload.');
  }
}

// Drag-and-drop event handlers
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
}

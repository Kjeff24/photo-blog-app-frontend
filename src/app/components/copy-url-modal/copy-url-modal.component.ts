import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-copy-url-modal',
  imports: [],
  templateUrl: './copy-url-modal.component.html',
  styleUrl: './copy-url-modal.component.css'
})
export class CopyUrlModalComponent {
  @Input() url: string = '';
  @Output() close = new EventEmitter<void>();

  copyToClipboard(): void {
    navigator.clipboard.writeText(this.url);
  }

  closeModal(): void {
    this.close.emit();
  }
}

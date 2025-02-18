import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ToastrService } from '../../services/toastr/toastr.service';

@Component({
  selector: 'app-copy-url-modal',
  imports: [],
  templateUrl: './copy-url-modal.component.html',
  styleUrl: './copy-url-modal.component.css'
})
export class CopyUrlModalComponent {
  @Input() url: string = '';
  @Output() close = new EventEmitter<void>();

  constructor(private toastrService: ToastrService){}

  copyToClipboard(): void {
    navigator.clipboard.writeText(this.url);
    this.toastrService.showSuccess('Url copied to clipboard');
  }

  closeModal(): void {
    this.close.emit();
  }
}

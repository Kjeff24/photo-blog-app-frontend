import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CardMenuItem, MenuItem } from '../../models/photo-blog';

@Component({
  selector: 'app-modal',
  imports: [],
  templateUrl: './modal.component.html',
  styleUrl: './modal.component.css'
})
export class ModalComponent {
  @Input() selectedItem?: CardMenuItem;
  @Output() close = new EventEmitter<void>();
  @Output() continue = new EventEmitter<void>();

  closeModal(): void {
    this.close.emit();
  }

  onContinue(): void {
    this.continue.emit()
    this.close.emit();
  }
}

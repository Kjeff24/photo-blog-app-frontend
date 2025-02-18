import { Component } from '@angular/core';
import { ToastrService } from '../../services/toastr/toastr.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-toastr',
  imports: [CommonModule],
  templateUrl: './toastr.component.html',
  styleUrl: './toastr.component.css'
})
export class ToastrComponent {
  toast: { type: string; message: string } | null = null;

  constructor(private toastrService: ToastrService) {}

  ngOnInit() {
    this.toastrService.toast$.subscribe((toast) => {
      this.toast = toast;
    });
  }

  closeToast() {
    this.toast = null;
  }
}

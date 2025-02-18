import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ToastrService {
  private toastSubject = new BehaviorSubject<{ type: string; message: string } | null>(null);
  toast$ = this.toastSubject.asObservable();

  showSuccess(message: string) {
    this.showToast('success', message);
  }

  showError(message: string) {
    this.showToast('error', message);
  }

  private showToast(type: 'success' | 'error', message: string) {
    this.toastSubject.next({ type, message });

    setTimeout(() => this.toastSubject.next(null), 3000);
  }
}

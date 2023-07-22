import { Injectable, TemplateRef } from '@angular/core';

export type ToastType = 'success' | 'warning' | 'info' | 'error';

type OptionConfig = {
  animation?: boolean;
  autohide?: boolean;
  delay?: number;
  header?: string;
  type?: ToastType;
};

@Injectable({ providedIn: 'root' })
export class ToastService {
  toasts: any[] = [];

  show(textOrTpl: string | TemplateRef<any>, options?: OptionConfig) {
    if (options?.type === 'success') {
      this.toasts.push({ textOrTpl, ...options, classname: 'toast-success' });
      return;
    }

    if (options?.type === 'error') {
      this.toasts.push({ textOrTpl, ...options, classname: 'toast-error' });
      return;
    }

    if (options?.type === 'warning') {
      this.toasts.push({ textOrTpl, ...options, classname: 'toast-warning' });
      return;
    }

    this.toasts.push({ textOrTpl, ...options, classname: 'toast-info' });
  }

  remove(toast: any) {
    this.toasts = this.toasts.filter((t) => t !== toast);
  }

  clear() {
    this.toasts.splice(0, this.toasts.length);
  }
}

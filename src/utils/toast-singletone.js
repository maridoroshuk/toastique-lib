/* eslint-disable class-methods-use-this */
/* eslint-disable no-constructor-return */
import uuid from '@/shared/helpers';

let instance;

class ToastManager {
  constructor() {
    if (instance) {
      return instance;
    }
    this.toasts = [];
    instance = this;
  }

  addToast(toast) {
    if (this.toasts.length > 3) {
      return;
    }
    this.toasts.push(toast);
  }

  getToasts() {
    return this.toasts;
  }

  removeToast(id) {
    this.toasts = this.toasts.filter((t) => t.id !== id);
  }

  generateToast(options) {
    return {
      id: uuid(),
      ...options,
    };
  }
}

export default ToastManager;

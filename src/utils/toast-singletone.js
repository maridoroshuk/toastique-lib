class ToastManager {
  constructor() {
    this.toasts = [];
    this.instance = null;
  }

  createInstance(ref) {
    this.instance = ref;
  }

  addToast(toast) {
    if (this.toasts.length >= 3) {
      return;
    }
    this.toasts.push(toast);
    this.instance.rerender();
  }

  getToasts() {
    return this.toasts;
  }

  removeToast(id) {
    this.toasts = this.toasts.filter((t) => t.id !== id);
    this.instance.rerender();
  }
}

const toastSingletone = new ToastManager();
export default toastSingletone;

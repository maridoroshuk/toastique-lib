declare module "toast-toastique" {
  import * as React from "react";

  interface button_props {
    handleOnShow?(): void;
  }

  export const Button: React.ComponentClass<button_props>;

  interface errorboundary_props {
    children?: union;
  }

  export const ErrorBoundary: React.ComponentClass<errorboundary_props>;

  interface toast_props {
    toast?: arrayOf;
    onCloseToastClick?(): void;
  }

  export const Toast: React.ComponentClass<toast_props>;

  interface toastcontainer_props {
    config?: string;
  }

  export const ToastContainer: React.ComponentClass<toastcontainer_props>;
}

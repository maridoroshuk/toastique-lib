import { useContext, useLayoutEffect, useState } from 'react';
import { ToastContext } from '../context/store';

const useToastAutoClose = (
  toasts,
  setToasts,
  autoCloseTime,
) => {
  const [removing, setRemoving] = useState('');
  const toastSingletone = useContext(ToastContext);

  useLayoutEffect(() => {
    if (removing) {
      toastSingletone.removeToast(removing);
      setToasts(toastSingletone.getToasts());
    }
  }, [removing, setToasts]);

  useLayoutEffect(() => {
    if (toasts.length) {
      const { id } = toasts[toasts.length - 1];
      setTimeout(() => setRemoving(id), autoCloseTime);
    }
  }, [toasts, autoCloseTime]);
};

export default useToastAutoClose;

import { useEffect, useState } from 'react';
import toastSingletone from '../utils/toast-singletone';

const useToastAutoClose = (toasts, autoCloseTime) => {
  const [removing, setRemoving] = useState('');

  useEffect(() => {
    if (removing) {
      toastSingletone.removeToast(removing);
    }
  }, [removing]);

  useEffect(() => {
    if (toasts.length) {
      const { id } = toasts[toasts.length - 1];
      setTimeout(() => setRemoving(id), autoCloseTime);
    }
  });
};

export default useToastAutoClose;

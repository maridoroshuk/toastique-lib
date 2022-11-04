import { useEffect, useState } from 'react';

const useToastAutoClose = (
  toasts,
  removeToast,
  autoCloseTime,
) => {
  const [removing, setRemoving] = useState('');

  useEffect(() => {
    if (removing) {
      removeToast(removing);
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

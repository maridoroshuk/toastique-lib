import React, {
  forwardRef,
  useImperativeHandle,
  useState,
} from 'react';
import toast from '@/utils/ToastSingletone/ToastSingletone';
import ToastList from '@/components/ToastList';

const ToastPortal = forwardRef((properties, ref) => {
  const [toastList, setToastList] = useState([]);

  useImperativeHandle(ref, () => ({
    addToasts(variant, args) {
      toast.addToast(variant, args);
      setToastList(toast.getToasts());
    },
  }));

  return (
    <ToastList
      toast={toast}
      toastList={toastList}
      properties={properties}
    />
  );
});

export default ToastPortal;

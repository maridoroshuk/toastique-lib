import React, {
  useImperativeHandle,
  forwardRef,
  useState,
} from 'react';
import toast from '@/utils/ToastSingletone/ToastSingletone';
import ToastList from '@/components/ToastList/ToastList';

const ToastPortal = forwardRef((properties, ref) => {
  const [toastList, setToastList] = useState([]);

  useImperativeHandle(ref, () => ({
    addToasts(variant, args) {
      setToastList(toast.getToasts(variant, args));
    },
  }));

  return (
    <ToastList toast={toast} toastList={toastList} properties={properties} />
  );
});

export default ToastPortal;

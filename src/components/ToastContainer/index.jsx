import React, { useState } from 'react';
import ErrorBoundary from '@/components/ErrorBoundary';
import Button from '@/components/Button';
import toast from '@/utils/ToastSingletone/ToastSingletone';
import ToastList from '@/components/ToastList';

function ToastContainer({ ...args }) {
  const [toastList, setToastList] = useState([]);
  const { variant, position, autoCloseTime } = args;

  const handleOnShow = () => {
    toast.addToast(variant, args);
    setToastList(toast.getToasts());
  };
  return (
    <ErrorBoundary>
      <ToastList
        toast={toast}
        toastList={toastList}
        position={position}
        autoCloseTime={autoCloseTime}
      />
      <Button handleOnShow={handleOnShow} />
    </ErrorBoundary>
  );
}

export default React.memo(ToastContainer);

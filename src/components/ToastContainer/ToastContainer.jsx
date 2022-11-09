import React, { useRef } from 'react';
import ErrorBoundary from '@/components/ErrorBoundary/ErrorBoundary';
import Button from '@/components/Button/Button';
import ToastPortal from '@/components/ToastPoartal/ToastPortal';

function ToastContainer(args) {
  const toastRef = useRef();

  const handleShowToastClick = (properties) => {
    toastRef.current.addToasts(properties);
  };

  return (
    <ErrorBoundary>
      <ToastPortal ref={toastRef} {...args} />
      <Button
        handleOnShow={() => handleShowToastClick(args)}
      />
    </ErrorBoundary>
  );
}

export default ToastContainer;

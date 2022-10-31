/* eslint-disable react/jsx-props-no-spreading */
import React, { useRef } from 'react';
import Button from '@/components/Button/Button';
import ToastPortal from '@/components/ToastPortal/ToastPortal';
import ErrorBoundary from '@/components/ErrorBoundary/ErrorBoundary';
import { ToastProvider } from '@/context/store';

function ToastConteiner({ ...args }) {
  const toastRef = useRef();
  const handleShowToastClick = () => {
    toastRef.current.addToast(args);
  };

  return (
    <ErrorBoundary>
      <ToastProvider>
        <ToastPortal ref={toastRef} {...args} />
        <Button onClick={() => handleShowToastClick()} />
      </ToastProvider>
    </ErrorBoundary>
  );
}

export default ToastConteiner;
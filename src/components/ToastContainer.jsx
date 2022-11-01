/* eslint-disable react/jsx-props-no-spreading */
import React, { useLayoutEffect, useRef } from 'react';
import Button from '@/components/Button/Button';
import ToastPortal from '@/components/ToastPortal/ToastPortal';
import ErrorBoundary from '@/components/ErrorBoundary/ErrorBoundary';
import toastSingletone from '../utils/toast-singletone';

function ToastContainer({ ...args }) {
  const toastRef = useRef();

  useLayoutEffect(() => {
    toastSingletone.createInstance(toastRef.current);
  }, []);

  const handleShowToastClick = () => {
    toastRef.current.addToast(args);
  };

  return (
    <ErrorBoundary>
      <ToastPortal ref={toastRef} {...args} />
      <Button onClick={() => handleShowToastClick()} />
    </ErrorBoundary>
  );
}

export default ToastContainer;

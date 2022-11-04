/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import Button from '@/components/Button/Button';
import ToastPortal from '@/components/ToastPortal/ToastPortal';
import ErrorBoundary from '@/components/ErrorBoundary/ErrorBoundary';
// import toastSingletone from '../utils/toast-singletone';
import toast from './ToastSingletone/ToastSingletone';

function Toastique({ ...args }) {
  // const toastRef = useRef();

  // useLayoutEffect(() => {
  //   toastSingletone.createInstance(toastRef.current);
  // }, []);

  console.log(args);
  const handleShowToastClick = () => {
    toast.getToast({ ...args });
    // toastRef.current.addToast(args);
  };

  return (
    <ErrorBoundary>
      <ToastPortal />
      <Button onClick={handleShowToastClick} />
    </ErrorBoundary>
  );
}

export default Toastique;

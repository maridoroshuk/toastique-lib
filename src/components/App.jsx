/* eslint-disable react/jsx-props-no-spreading */
import React, { useRef } from 'react';
import Button from '@/components/Button/Button';
import ToastPortal from '@/components/ToastPortal/ToastPortal';
import Error from '@/components/Error/Error';

function App(args) {
  const toastRef = useRef();

  const handleShowToastClick = () => {
    toastRef.current.addToast(args);
  };

  return (
    <Error>
      <ToastPortal ref={toastRef} {...args} />
      <Button onClick={() => handleShowToastClick()} />
    </Error>
  );
}

export default App;

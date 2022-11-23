import React, { useState } from 'react';
import { ThemeProvider } from 'styled-components';
import ErrorBoundary from '@/components/ErrorBoundary';
import Button from '@/components/Button';
import toast from '@/utils/toastSingletone';
import ToastList from '@/components/ToastList';
import { theme } from '@/theme';

function ToastContainer({ ...args }) {
  const [toastList, setToastList] = useState([]);
  const { variant, autoCloseTime } = args;

  const handleOnShow = () => {
    toast.addToast(variant, args);
    setToastList(toast.getToasts());
  };
  return (
    <ThemeProvider theme={theme}>
      <ErrorBoundary>
        <ToastList
          toast={toast}
          toastList={toastList}
          autoCloseTime={autoCloseTime}
        />
        <Button handleOnShow={handleOnShow} />
      </ErrorBoundary>
    </ThemeProvider>
  );
}

export default React.memo(ToastContainer);

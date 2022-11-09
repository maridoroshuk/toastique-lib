import React, { useLayoutEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import ErrorBoundary from '@/components/ErrorBoundary/ErrorBoundary';
import Button from '@/components/Button/Button';
import ToastPortal from '@/components/ToastPoartal/ToastPortal';

function ToastContainer({ config, ...args }) {
  const toastRef = useRef();

  useLayoutEffect(() => {
    toastRef.current.addToasts(config, args);
  }, []);

  const handleShowToastClick = (variant, properties) => {
    toastRef.current.addToasts(variant, properties);
  };

  return (
    <ErrorBoundary>
      <ToastPortal ref={toastRef} {...args} />
      <Button
        handleOnShow={() => handleShowToastClick(config, args)}
      />
    </ErrorBoundary>
  );
}

ToastContainer.propTypes = {
  config: PropTypes.string.isRequired,
};

export default ToastContainer;

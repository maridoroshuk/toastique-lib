import React, { useLayoutEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import ErrorBoundary from '@/components/ErrorBoundary';
import ToastPortal from '@/components/ToastPoartal';
import Button from '@/components/Button';

function ToastContainer({ config, ...args }) {
  const toastRef = useRef();

  useLayoutEffect(() => {
    toastRef.current.addToasts(config, args);
  }, []);

  const handleShowToastClick = (variant, properties) => {
    toastRef.current.addToasts(variant, properties);
  };

  const handleOnShow = () => {
    handleShowToastClick(config, args);
  };

  return (
    <ErrorBoundary>
      <ToastPortal ref={toastRef} {...args} />
      <Button handleOnShow={handleOnShow} />
    </ErrorBoundary>
  );
}

ToastContainer.propTypes = {
  config: PropTypes.string.isRequired,
};

export default React.memo(ToastContainer);

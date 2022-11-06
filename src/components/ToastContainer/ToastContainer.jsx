import React, { useState, useEffect, useCallback } from 'react';
import { createPortal } from 'react-dom';
import PropTypes from 'prop-types';
import ErrorBoundary from '@/components/ErrorBoundary/ErrorBoundary';
import Toast from '@/components/Toast/Toast';
import useToastAutoClose from '@/hooks/useToastAutoClose';
import useToastPortal from '@/hooks/useToastPortal';
import { Container } from './styled';

function ToastContainer({ position, autoCloseTime, toasts }) {
  const [toastList, setToastList] = useState([toasts]);
  const { loaded, portalId } = useToastPortal(position);

  const removeToast = (id) => useCallback(() => {
    const toastListItem = toastList.findIndex(
      (t) => t.id === id,
    );
    const toastsItem = toasts.findIndex((t) => t.id === id);
    setToastList(toastList.splice(toastListItem, 1));
    toasts.splice(toastsItem, 1);
  }, []);

  useEffect(() => {
    setToastList([...toasts]);
  }, [toasts]);

  useToastAutoClose(toasts, removeToast, autoCloseTime);

  return loaded
    ? createPortal(
      <ErrorBoundary>
        <Container>
          {toasts.map((t) => (
            <Toast
              key={t.id}
              toast={t}
              onCloseToastClick={removeToast}
            />
          ))}
        </Container>
      </ErrorBoundary>,
      document.getElementById(portalId),
    )
    : null;
}

const toastsPropsType = PropTypes.shape({
  animation: PropTypes.string,
  autoCloseTime: PropTypes.number,
  color: PropTypes.string,
  content: PropTypes.string,
  gap: PropTypes.string,
  heading: PropTypes.string,
  icon: PropTypes.string,
  id: PropTypes.string,
  position: PropTypes.string,
  variant: PropTypes.string,
});

ToastContainer.propTypes = {
  autoCloseTime: PropTypes.number.isRequired,
  position: PropTypes.string.isRequired,
  toasts: PropTypes.arrayOf(toastsPropsType).isRequired,
};

export default ToastContainer;

/* eslint-disable no-param-reassign */
/* eslint-disable import/no-cycle */
import React, { useState, useLayoutEffect } from 'react';
import { createPortal } from 'react-dom';
import PropTypes from 'prop-types';
import Toast from '@/components/Toast/Toast';
import useToastAutoClose from '@/hooks/useToastAutoClose';
import useToastPortal from '@/hooks/useToastPortal';
import { Container } from './ToastPortal.styled';

function ToastPortal({ position, autoCloseTime, toasts }) {
  const [toastList, setToastList] = useState([toasts]);

  const { loaded, portalId } = useToastPortal(position);

  const removeToast = (id) => {
    const toastListItem = toastList.findIndex(
      (t) => t.id === id,
    );
    const toastsItem = toasts.findIndex((t) => t.id === id);
    setToastList(toastList.splice(toastListItem, 1));
    toasts.splice(toastsItem, 1);
  };

  useLayoutEffect(() => {
    setToastList([...toasts]);
  }, [toasts]);

  useToastAutoClose(toasts, removeToast, autoCloseTime);

  return loaded
    ? createPortal(
      <Container>
        {toasts.map((t) => (
          <Toast
            key={t.id}
            toast={t}
            onClose={() => removeToast(t.id)}
          />
        ))}
      </Container>,
      document.getElementById(portalId),
    )
    : null;
}

ToastPortal.propTypes = {
  autoCloseTime: PropTypes.number.isRequired,
  position: PropTypes.string.isRequired,
  toasts: PropTypes.arrayOf({
    variant: PropTypes.string,
    content: PropTypes.string,
    heading: PropTypes.string,
    color: PropTypes.string,
    animation: PropTypes.string,
    gap: PropTypes.string,
  }).isRequired,
};

export default ToastPortal;

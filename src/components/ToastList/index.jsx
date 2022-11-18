import React, { useState, useLayoutEffect } from 'react';
import { createPortal } from 'react-dom';
import PropTypes from 'prop-types';
import Toast from '@/components/Toast';
import useToastAutoClose from '@/hooks/useToastAutoClose';
import useToastPortal from '@/hooks/useToastPortal';
import getPortalTextPosition from '@/shared/getPortalTextPosition';
import { Container } from './styled';

function ToastList({
  toast,
  toastList,
  position,
  autoCloseTime,
}) {
  const [toasts, setToasts] = useState(toastList);
  const { loaded, portalId } = useToastPortal(position);

  useLayoutEffect(() => {
    setToasts(toastList);
  }, [toastList]);

  const removeToast = (id) => {
    setToasts(toast.removeToast(id));
  };

  useToastAutoClose(toasts, removeToast, autoCloseTime);

  const positionStyle = getPortalTextPosition(position);

  return loaded
    ? createPortal(
      <div style={positionStyle}>
        <Container>
          {toasts.map((t) => (
            <Toast
              key={t.id}
              toast={t}
              onCloseToastClick={removeToast}
            />
          ))}
        </Container>
      </div>,
      document.getElementById(portalId),
    )
    : null;
}

const toastsPropsType = PropTypes.shape({
  animation: PropTypes.string,
  autoCloseTime: PropTypes.number,
  color: PropTypes.string,
  content: PropTypes.string,
  'space between toasts': PropTypes.string,
  heading: PropTypes.string,
  icon: PropTypes.string,
  id: PropTypes.string,
  position: PropTypes.string,
  variant: PropTypes.string,
});

ToastList.propTypes = {
  toast: PropTypes.shape({
    toasts: PropTypes.arrayOf(toastsPropsType),
    removeToast: PropTypes.func,
  }).isRequired,
  toastList: PropTypes.arrayOf(toastsPropsType).isRequired,
  position: PropTypes.string.isRequired,
  autoCloseTime: PropTypes.number.isRequired,
};

export default React.memo(ToastList);

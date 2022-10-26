import React, {
  forwardRef,
  useImperativeHandle,
  useState,
} from 'react';
import { createPortal } from 'react-dom';
import PropTypes from 'prop-types';
import Toast from '@/components/Toast/Toast';
import uuid from '@/shared/helpers';
import useToastAutoClose from '@/hooks/useToastAutoClose';
import useToastPortal from '@/hooks/useToastPortal';
import { Container } from './ToastPortal.styled';

const ToastPortal = forwardRef(
  ({ autoCloseTime, position }, ref) => {
    const [toasts, setToasts] = useState([]);
    const { loaded, portalId } = useToastPortal(position);

    const removeToast = (id) => {
      setToasts(toasts.filter((t) => t.id !== id));
    };

    useImperativeHandle(ref, () => ({

      addToast(toast) {
        setToasts((prevToasts) => {
          if (prevToasts.length < 3) {
            return [
              ...prevToasts,
              { ...toast, id: uuid() },
            ];
          }
          return [...prevToasts];
        });
      },
    }));

    useToastAutoClose(toasts, setToasts, autoCloseTime);

    return loaded ? (
      createPortal(
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
    ) : null;
  },
);

ToastPortal.propTypes = {
  autoCloseTime: PropTypes.number.isRequired,
  position: PropTypes.string.isRequired,
};

export default ToastPortal;

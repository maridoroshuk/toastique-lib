import React, {
  forwardRef,
  useContext,
  useImperativeHandle,
  useState,
} from 'react';
import { createPortal } from 'react-dom';
import PropTypes from 'prop-types';
import Toast from '@/components/Toast/Toast';
import useToastAutoClose from '@/hooks/useToastAutoClose';
import useToastPortal from '@/hooks/useToastPortal';
import { Container } from './ToastPortal.styled';
import { ToastContext } from '../../context/store';

const ToastPortal = forwardRef(
  ({ autoCloseTime, position }, ref) => {
    const toastSingletone = useContext(ToastContext);
    const [toasts, setToasts] = useState([]);
    const { loaded, portalId } = useToastPortal(position);

    const removeToast = (id) => {
      toastSingletone.removeToast(id);
      setToasts(toastSingletone.getToasts());
    };

    useImperativeHandle(ref, () => ({
      addToast(toast) {
        toastSingletone.addToast(
          toastSingletone.generateToast(toast),
        );
      },
      getToasts() {
        setToasts(toastSingletone.getToasts());
      },
    }));

    useToastAutoClose(toasts, setToasts, autoCloseTime);

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
  },
);

ToastPortal.propTypes = {
  autoCloseTime: PropTypes.number.isRequired,
  position: PropTypes.string.isRequired,
};

export default ToastPortal;

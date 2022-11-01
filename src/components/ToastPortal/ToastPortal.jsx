import React, {
  forwardRef,
  useImperativeHandle,
  useReducer,
} from 'react';
import { createPortal } from 'react-dom';
import PropTypes from 'prop-types';
import uuid from '@/shared/helpers';
import Toast from '@/components/Toast/Toast';
import useToastAutoClose from '@/hooks/useToastAutoClose';
import useToastPortal from '@/hooks/useToastPortal';
import toastSingletone from '@/utils/toast-singletone';
import { Container } from './ToastPortal.styled';

const ToastPortal = forwardRef(
  ({ autoCloseTime, position }, ref) => {
    // eslint-disable-next-line no-unused-vars
    const [ignored, forceUpdate] = useReducer(
      (x) => x + 1,
      0,
    );

    const toasts = toastSingletone.getToasts();

    const { loaded, portalId } = useToastPortal(position);

    const removeToast = (id) => {
      toastSingletone.removeToast(id);
    };

    useImperativeHandle(ref, () => ({
      addToast(toast) {
        toastSingletone.addToast({ id: uuid(), ...toast });
      },
      rerender() {
        forceUpdate();
      },
    }));

    useToastAutoClose(toasts, autoCloseTime);

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

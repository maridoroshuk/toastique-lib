import React, {
  useState,
  useImperativeHandle,
  forwardRef,
} from 'react';
import { createPortal } from 'react-dom';
import PropTypes from 'prop-types';
import Toast from '@/components/Toast/Toast';
import toast from '@/utils/ToastSingletone/ToastSingletone';
import useToastAutoClose from '@/hooks/useToastAutoClose';
import useToastPortal from '@/hooks/useToastPortal';
import { Container } from './styled';

const ToastPortal = forwardRef(
  ({ position, autoCloseTime }, ref) => {
    const [toastList, setToastList] = useState([]);
    const { loaded, portalId } = useToastPortal(position);

    const removeToast = (id) => {
      setToastList(toast.removeToast(id));
    };

    useImperativeHandle(ref, () => ({
      addToasts(args) {
        setToastList(toast.getToasts(args));
      },
    }));

    useToastAutoClose(
      toastList,
      removeToast,
      autoCloseTime,
    );

    return loaded
      ? createPortal(
        <Container>
          {toastList.map((t) => (
            <Toast
              key={t.id}
              toast={t}
              onCloseToastClick={removeToast}
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

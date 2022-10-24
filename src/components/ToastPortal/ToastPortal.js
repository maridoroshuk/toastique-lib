import { uuid } from "components/shared/helpers";
import Toast from "components/Toast/Toast";
import useToastAutoClose from "hooks/useToastAutoClose";
import useToastPortal from "hooks/useToastPortal";
import { forwardRef, useImperativeHandle, useState } from "react";
import { createPortal } from "react-dom";
import { Container } from "./ToastPortal.styled";

const ToastPortal = forwardRef(
  ({ autoCloseTime = 5000, position = "top" }, ref) => {
    const [toasts, setToasts] = useState([]);
    const { loaded, portalId } = useToastPortal(position);

    const removeToast = id => {
      setToasts(toasts.filter(t => t.id !== id));
    };

    useImperativeHandle(ref, () => ({
      addToast(toast) {
        setToasts(prevToasts => {
          if (prevToasts.length < 3) {
            return [...prevToasts, { ...toast, id: uuid() }];
          } else {
            return [...prevToasts]
          }
        });
      },
    }));

    useToastAutoClose(toasts, setToasts, autoCloseTime);

    return loaded ? (
      createPortal(
        <Container>
          {toasts.map(t => (
            <Toast
              key={t.id}
              variant={t.variant}
              content={t.content}
              heading={t.heading}
              color={t.color}
              onClose={() => removeToast(t.id)}
            ></Toast>
          ))}
        </Container>,
        document.getElementById(portalId),
      )
    ) : (
      <></>
    );
  },
);

export default ToastPortal;

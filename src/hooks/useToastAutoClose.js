import { useEffect, useState } from "react";

const useToastAutoClose = (toasts, setToasts, autoCloseTime) => {
  const [removing, setRemoving] = useState("");

  useEffect(() => {
    if (removing) {
      setToasts(t => t.filter(_t => _t.id !== removing));
    }
  }, [removing, setToasts]);

  useEffect(() => {
    if (toasts.length) {
      const id = toasts[toasts.length - 1].id;
      setTimeout(() => setRemoving(id), autoCloseTime);
    }
  }, [toasts, autoCloseTime]);
};

export default useToastAutoClose;

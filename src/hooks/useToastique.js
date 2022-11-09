import toast from '../utils/ToastSingletone/ToastSingletone';

const ToastsList = (variant, properties) => {
  const toasts = toast.getToasts(variant, properties);

  return toasts;
};

export const useToastique = (properties) => {
  const infoToastique = ToastsList('info', properties);
  const warningToastique = ToastsList(
    'warning',
    properties,
  );
  const errorToastique = ToastsList('error', properties);
  const successToastique = ToastsList(
    'success',
    properties,
  );

  return {
    infoToastique,
    warningToastique,
    errorToastique,
    successToastique,
  };
};

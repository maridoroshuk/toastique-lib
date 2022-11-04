import { TOASTS } from '@/constants/variants';
import INFO from '@/assets/info.png';
import WARNING from '@/assets/warning.png';
import ERROR from '@/assets/error.png';
import SUCCESS from '@/assets/success.png';

const getDefaultToast = (toastVariant) => {
  switch (toastVariant) {
    case TOASTS.INFO:
      return {
        icon: INFO,
        heading: 'Info toast',
        content: 'Info toast description',
        color: '#9f86c0',
      };
    case TOASTS.WARNING:
      return {
        icon: WARNING,
        heading: 'Warning toast',
        content: 'Warning toast description',
        color: '#fee440',
      };
    case TOASTS.ERROR:
      return {
        icon: ERROR,
        heading: 'Error toast',
        content: 'Error toast description',
        color: '#d62828',
      };
    case TOASTS.SUCCESS:
      return {
        icon: SUCCESS,
        heading: 'Success toast',
        content: 'Success toast description',
        color: '#57cc99',
      };
    default:
      return {};
  }
};

export default getDefaultToast;

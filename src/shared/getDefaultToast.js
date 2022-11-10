import INFO from '@/assets/info.png';
import WARNING from '@/assets/warning.png';
import ERROR from '@/assets/error.png';
import SUCCESS from '@/assets/success.png';
import { toastColors } from '../theme/colors';
import { TOASTS } from '../constants/variants';

const getDefaultToast = (toastVariant) => {
  switch (toastVariant) {
    case TOASTS.INFO:
      return {
        icon: INFO,
        heading: 'Info toast',
        content: 'Info toast description',
        color: `${toastColors.purple}`,
      };
    case TOASTS.WARNING:
      return {
        icon: WARNING,
        heading: 'Warning toast',
        content: 'Warning toast description',
        color: `${toastColors.yellow}`,
      };
    case TOASTS.ERROR:
      return {
        icon: ERROR,
        heading: 'Error toast',
        content: 'Error toast description',
        color: `${toastColors.tomato}`,
      };
    case TOASTS.SUCCESS:
      return {
        icon: SUCCESS,
        heading: 'Success toast',
        content: 'Success toast description',
        color: `${toastColors.green}`,
      };
    default:
      return {};
  }
};

export default getDefaultToast;

import INFO from '@/assets/info.png';
import WARNING from '@/assets/warning.png';
import ERROR from '@/assets/error.png';
import SUCCESS from '@/assets/success.png';
import { TOASTS } from '@/constants/variants';
import { theme } from '@/theme';

const commonProperties = {
  position: 'top-right',
  autoCloseTime: 5000,
  animation: 'from bottom',
  'space between toasts': 'medium',
};

const getDefaultToast = (toastVariant) => {
  switch (toastVariant) {
    case TOASTS.INFO:
      return {
        icon: INFO,
        heading: 'Info toast',
        content: 'Info toast description',
        color: `${theme.toastColors.purple}`,
        ...commonProperties,
      };
    case TOASTS.WARNING:
      return {
        icon: WARNING,
        heading: 'Warning toast',
        content: 'Warning toast description',
        color: `${theme.toastColors.yellow}`,
        ...commonProperties,
      };
    case TOASTS.ERROR:
      return {
        icon: ERROR,
        heading: 'Error toast',
        content: 'Error toast description',
        color: `${theme.toastColors.tomato}`,
        ...commonProperties,
      };
    case TOASTS.SUCCESS:
      return {
        icon: SUCCESS,
        heading: 'Success toast',
        content: 'Success toast description',
        color: `${theme.toastColors.green}`,
        ...commonProperties,
      };
    default:
      return {};
  }
};

export default getDefaultToast;

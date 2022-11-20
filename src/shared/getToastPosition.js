import { spaces } from '@/theme/sizes';

const getToastPosition = (position) => {
  switch (position) {
    case 'top-right':
      return {
        top: `${spaces.xs}px`,
        right: `${spaces.xs}px`,
      };
    case 'top-left':
      return {
        top: `${spaces.xs}px`,
        left: `${spaces.xs}px`,
      };
    case 'bottom-right':
      return {
        bottom: `${spaces.xs}px`,
        right: `${spaces.xs}px`,
      };
    case 'bottom-left':
      return {
        bottom: `${spaces.xs}px`,
        left: `${spaces.xs}px`,
      };
    default:
      return {
        top: `${spaces.xs}px`,
        right: `${spaces.xs}px`,
      };
  }
};

export default getToastPosition;

import { theme } from '@/theme';

const getToastPosition = (position) => {
  const margin = `${theme.spaces.xs}px`;
  switch (position) {
    case 'top-right':
      return {
        top: margin,
        right: margin,
      };
    case 'top-left':
      return {
        top: margin,
        left: margin,
      };
    case 'bottom-right':
      return {
        bottom: margin,
        right: margin,
      };
    case 'bottom-left':
      return {
        bottom: margin,
        left: margin,
      };
    default:
      return {
        top: margin,
        right: margin,
      };
  }
};

export default getToastPosition;

import { GAP } from '@/constants/gap';
import { theme } from '@/theme';

const getSpaceBetweenToasts = (gap) => {
  switch (gap) {
    case GAP.SMALL:
      return `${theme.spaces.xxs}px`;
    case GAP.MEDIUM:
      return `${theme.spaces.s}px`;
    case GAP.LARGE:
      return `${theme.spaces.xl}px`;
    default:
      return `${theme.spaces.s}px`;
  }
};

export default getSpaceBetweenToasts;

import { spaces } from '@/theme/sizes';

const getPortalTextPosition = (position = 'top-right') => ({
  position: 'fixed',
  left: position?.includes('left')
    ? `${spaces.xs}px`
    : null,
  right: position?.includes('right')
    ? `${spaces.xs}px`
    : null,
  top: position?.includes('top')
    ? `${spaces.xs}px`
    : null,
  bottom: position?.includes('bottom')
    ? `${spaces.xs}px`
    : null,
  zIndex: 1000,
});

export default getPortalTextPosition;

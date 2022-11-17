import { animated, useSpring } from 'react-spring';
import { ANIMATION } from '@/constants/animation';

const useAnimation = (animation) => {
  const styles = useSpring({
    from: {
      y: animation === ANIMATION.BOTTOM ? 1000 : 0,
      x: animation === ANIMATION.RIGHT_SIDE ? 500 : 0,
    },
    to: {
      y: 0,
      x: 0,
    },
  });

  return { styles, animated };
};

export default useAnimation;

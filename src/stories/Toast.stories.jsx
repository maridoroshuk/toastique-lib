/* eslint-disable react/jsx-props-no-spreading */
import Button from '@/components/Button/Button';
import Toastique from '@/components/Basic/Toastique';
import {
  ANIMATION,
  animations,
} from '@/constants/animation';
import {
  AUTO_CLOSE,
  autoCloseTime,
} from '@/constants/auto-close-time';
import { POSITION, positions } from '@/constants/position';
import { TOASTS, variants } from '@/constants/variants';
import { GAP, gaps } from '@/constants/gap';

export default {
  title: 'Toast',
  component: Button,

  argTypes: {
    color: {
      description: 'Color',
      control: {
        type: 'color',
      },
    },
    gap: {
      description: 'Gap between toasts',
      default: GAP.MEDIUM,
      options: gaps,
      control: {
        type: 'radio',
      },
    },
    animation: {
      description: 'Toast position',
      default: ANIMATION.BOTTOM,
      options: animations,
      control: {
        type: 'radio',
      },
    },
    autoCloseTime: {
      description: 'Toast position',
      default: AUTO_CLOSE['5'],
      options: autoCloseTime,
      control: {
        type: 'radio',
      },
    },
    position: {
      description: 'Toast position',
      default: POSITION.TOP,
      options: positions,
      control: {
        type: 'radio',
      },
    },
    variant: {
      type: 'string',
      description: 'Toast type',
      default: TOASTS.INFO,
      options: variants,
      control: {
        type: 'radio',
      },
    },
  },
};

export const Default = Toastique.bind({});
Default.args = {
  variant: TOASTS.INFO,
  position: POSITION.TOP,
  autoCloseTime: AUTO_CLOSE['5'],
  animation: ANIMATION.BOTTOM,
  gap: GAP.MEDIUM,
  heading: '',
  content: '',
};

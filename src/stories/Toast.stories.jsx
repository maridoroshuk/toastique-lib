import React from 'react';
import {
  ANIMATION,
  animations,
} from '@/constants/animation';
import {
  AUTO_CLOSE,
  autoCloseTime,
} from '@/constants/autoCloseTime';
import { POSITION, positions } from '@/constants/position';
import { TOASTS, variants } from '@/constants/variants';
import { GAP, gaps } from '@/constants/gap';
import ToastContainer from '@/components/ToastContainer';

export default {
  title: 'Toast',
  component: ToastContainer,

  argTypes: {
    color: {
      description: 'Color',
      control: {
        type: 'color',
      },
    },
    'space between toasts': {
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
      default: POSITION.TOP_RIGHT,
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

export function Default(args) {
  const { variant } = args;
  return <ToastContainer config={variant} {...args} />;
}
Default.args = {
  variant: TOASTS.INFO,
  position: POSITION.TOP_RIGHT,
  autoCloseTime: AUTO_CLOSE['5'],
  animation: ANIMATION.BOTTOM,
  'space between toasts': GAP.MEDIUM,
  heading: '',
  content: '',
};

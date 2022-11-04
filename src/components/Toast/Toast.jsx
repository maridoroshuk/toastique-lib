/* eslint-disable import/no-cycle */
/* eslint-disable react/require-default-props */
import React from 'react';
import PropTypes from 'prop-types';
import { animated, useSpring } from 'react-spring';
import { ANIMATION } from '@/constants/animation';

import CloseIcon from '@/assets/close.png';
import {
  Body,
  Close,
  CloseImg,
  Container,
  Content,
  Heading,
  Icon,
} from './Toast.styled';

function Toast({ toast, onClose }) {
  const {
    animation,
    variant,
    color,
    content,
    heading,
    gap,
    icon,
  } = toast;
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

  return (
    <Container
      style={styles}
      as={animated.div}
      color={color}
      variant={variant}
      gap={gap}
    >
      <Icon src={icon} />
      <Body>
        <Heading>{heading}</Heading>
        <Content>{content}</Content>
      </Body>
      <Close onClick={onClose}>
        <CloseImg src={CloseIcon} alt="close" />
      </Close>
    </Container>
  );
}

Toast.propTypes = {
  toast: PropTypes.arrayOf({
    variant: PropTypes.string,
    content: PropTypes.string,
    heading: PropTypes.string,
    color: PropTypes.string,
    animation: PropTypes.string,
    gap: PropTypes.string,
  }).isRequired,
  onClose: PropTypes.func.isRequired,
};

export default Toast;

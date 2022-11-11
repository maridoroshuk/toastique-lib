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
} from './styled';

function Toast({ toast, onCloseToastClick }) {
  const {
    id,
    animation,
    variant,
    color,
    content,
    heading,
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

  const handleOnCloseToastClick = () => {
    onCloseToastClick(id);
  };

  return (
    <Container
      style={styles}
      as={animated.div}
      color={color}
      variant={variant}
      gap={toast['space between toasts']}
    >
      <Icon src={icon} />
      <Body>
        <Heading>{heading}</Heading>
        <Content>{content}</Content>
      </Body>
      <Close onClick={handleOnCloseToastClick}>
        <CloseImg src={CloseIcon} alt="close" />
      </Close>
    </Container>
  );
}

Toast.propTypes = {
  toast: PropTypes.shape({
    animation: PropTypes.string,
    autoCloseTime: PropTypes.number,
    color: PropTypes.string,
    content: PropTypes.string,
    'space between toasts': PropTypes.string,
    heading: PropTypes.string,
    icon: PropTypes.string,
    id: PropTypes.string,
    position: PropTypes.string,
    variant: PropTypes.string,
  }).isRequired,
  onCloseToastClick: PropTypes.func.isRequired,
};

export default Toast;

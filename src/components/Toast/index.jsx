import React from 'react';
import PropTypes from 'prop-types';
import CloseIcon from '@/assets/close.png';
import useAnimation from '@/hooks/useAnimation';
import getToastPosition from '@/shared/getToastPosition';
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
    position,
  } = toast;
  const { styles, animated } = useAnimation(animation);

  const handleOnCloseToastClick = () => {
    onCloseToastClick(id);
  };

  return (
    <div style={{ ...getToastPosition(position), position: 'absolute' }}>
      <Container
        style={styles}
        as={animated.div}
        color={color}
        variant={variant}
        position={position}
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
    </div>
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

export default React.memo(Toast);

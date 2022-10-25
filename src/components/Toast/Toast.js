import PropTypes from "prop-types";
import { animated, useSpring } from "react-spring";
import {
  Body,
  Close,
  CloseImg,
  Container,
  Content,
  Heading,
  Icon,
} from "./Toast.styled";
import { TOASTS } from "constants/variants";
import { ANIMATION } from "constants/animation";
import INFO from "assets/info.png";
import WARNING from "assets/warning.png";
import ERROR from "assets/error.png";
import SUCCESS from "assets/success.png";
import CloseIcon from "assets/close.png";

const Toast = ({ toast, onClose }) => {
  const { variant, content, heading, color, animation } = toast;

  const getDefaultToast = variant => {
    switch (variant) {
      case TOASTS.INFO:
        return {
          icon: INFO,
          heading: heading ? heading : "Info toast",
          content: content ? content : "Info toast description",
          color: color ? color : "#9f86c0",
        };
      case TOASTS.WARNING:
        return {
          icon: WARNING,
          heading: heading ? heading : "Warning toast",
          content: content ? content : "Warning toast description",
          color: color ? color : "#fee440",
        };
      case TOASTS.ERROR:
        return {
          icon: ERROR,
          heading: heading ? heading : "Error toast",
          content: content ? content : "Error toast description",
          color: color ? color : "#d62828",
        };
      case TOASTS.SUCCESS:
        return {
          icon: SUCCESS,
          heading: heading ? heading : "Success toast",
          content: content ? content : "Success toast description",
          color: color ? color : "#57cc99",
        };
      default:
        return {};
    }
  };

  const defaultToast = getDefaultToast(variant);

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
      color={defaultToast.color}
      variant={variant}
    >
      <Icon src={defaultToast.icon} />
      <Body>
        <Heading>{defaultToast.heading}</Heading>
        <Content>{defaultToast.content}</Content>
      </Body>
      <Close onClick={onClose}>
        <CloseImg src={CloseIcon} alt="close" />
      </Close>
    </Container>
  );
};

Toast.propTypes = {
  toast: PropTypes.object,
  onClose: PropTypes.func,
};

export default Toast;

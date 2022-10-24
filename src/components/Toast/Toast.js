import PropTypes from "prop-types";
import {
  Body,
  Close,
  CloseImg,
  Container,
  Content,
  Heading,
  Icon,
} from "./Toast.styled";
import { TOASTS, variants } from "constants/variants";
import INFO from "../../assets/info.png";
import WARNING from "../../assets/warning.png";
import ERROR from "../../assets/error.png";
import SUCCESS from "../../assets/success.png";
import CloseIcon from "../../assets/close.png";

const Toast = ({ variant, onClose, content, heading, color }) => {
  const icon = variant => {
    if (variant === TOASTS.INFO) return INFO;
    if (variant === TOASTS.WARNING) return WARNING;
    if (variant === TOASTS.ERROR) return ERROR;
    if (variant === TOASTS.SUCCESS) return SUCCESS;
  };
  console.log(color);

  return (
    <Container variant={variant} color={color}>
      <Icon src={icon(variant)} />
      <Body>
        <Heading>{heading}</Heading>
        <Content>{content}</Content>
      </Body>
      <Close onClick={onClose}>
        <CloseImg src={CloseIcon} alt="close" />
      </Close>
    </Container>
  );
};

Toast.propTypes = {
  variant: PropTypes.oneOf(variants),
  onClose: PropTypes.func,
  body: PropTypes.string,
};

export default Toast;

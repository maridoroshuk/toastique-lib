import { Container, StyledButton } from "./Button.styled";

const Button = ({ onClick }) => {
  return (
    <Container>
      <StyledButton onClick={onClick}>Show Toast</StyledButton>
    </Container>
  );
};

export default Button;

import React from 'react';
import PropTypes from 'prop-types';
import { Container, StyledButton } from './Button.styled';

function Button({ onClick }) {
  return (
    <Container>
      <StyledButton onClick={onClick}>Show Toast</StyledButton>
    </Container>
  );
}

Button.propTypes = {
  onClick: PropTypes.func.isRequired,
};

export default Button;

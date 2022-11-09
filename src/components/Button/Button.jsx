import React from 'react';
import PropTypes from 'prop-types';
import { Container, StyledButton } from './styled';

function Button({ handleOnShow }) {
  return (
    <Container>
      <StyledButton onClick={handleOnShow}>
        Show Toast
      </StyledButton>
    </Container>
  );
}

Button.propTypes = {
  handleOnShow: PropTypes.func.isRequired,
};

export default Button;

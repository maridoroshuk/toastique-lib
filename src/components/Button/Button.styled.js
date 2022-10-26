import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const StyledButton = styled.button`
  background-color: transparent;
  border: 0.2rem solid #8ecae6;
  border-radius: 20rem;
  position: absolute;
  top: 50%;
  right: 50%;
  transform: translate(50%, -50%);
  padding: 1rem;
  margin: 0 auto;
  font-size: 1.2rem;
  letter-spacing: 0.2rem;
  cursor: pointer;

  &:hover {
    background-color: #8ecae6;
  }
`;

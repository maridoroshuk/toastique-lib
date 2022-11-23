import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const StyledButton = styled.button`
  background-color: ${({ theme: { colors } }) => colors.transparent};
  border: ${({ theme: { colors, spaces } }) => `${spaces.xs}px solid ${colors.blue}`};
  border-radius: ${({ theme: { spaces } }) => `${spaces.xxl}px`};
  position: absolute;
  top: 50%;
  right: 50%;
  transform: translate(50%, -50%);
  padding: ${({ theme: { spaces } }) => `${spaces.l}px`};
  margin: 0 auto;
  font-size: ${({ theme: { fontSizes } }) => `${fontSizes.m}px`};
  letter-spacing: ${({ theme: { spaces } }) => `${spaces.xs}px`};
  cursor: pointer;
  &:hover {
    background-color: ${({ theme: { colors } }) => colors.blue};
  }
`;

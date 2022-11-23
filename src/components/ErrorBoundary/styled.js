import styled from 'styled-components';

export const Container = styled.h1`
  text-align: center;
  margin: ${({ theme: { spaces } }) => `${spaces.xxl}px`};
`;

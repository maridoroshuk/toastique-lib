import styled from 'styled-components';

export const Container = styled.div`
  gap: ${({ theme: { spaces } }) => `${spaces.xxs}px`};
  display: flex;
  flex-direction: column;
`;

export const Wrapper = styled.div`
  position: absolute;
`;

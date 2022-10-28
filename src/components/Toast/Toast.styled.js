import styled from 'styled-components';
import { TOASTS } from '@/constants/variants';
import { GAP } from '@/constants/gap';

const handleMarginType = (gap) => {
  switch (gap) {
    case GAP.SMALL:
      return '0.1rem';
    case GAP.MEDIUM:
      return '0.5rem';
    case GAP.LARGE:
      return '1rem';
    default:
      return '0.5rem';
  }
};

export const Container = styled.div`
  width: 20rem;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  padding: 0.5rem 1rem;
  margin: ${({ gap }) => handleMarginType(gap)};
  color: ${({ variant }) => (variant === TOASTS.WARNING ? 'black' : 'white')};
  background-color: ${({ color }) => color};
  border-radius: 1rem;
  box-sizing: border-box;
  transition: 0.2s;
  font-family: sans-serif;
`;

export const Icon = styled.img`
  width: 2rem;
  height: 2rem;
`;

export const Close = styled.button`
  width: 2rem;
  height: 1rem;
  background-color: transparent;
  border: none;
  position: absolute;
  top: 0.5rem;
  right: 0.3rem;
  cursor: pointer;
`;

export const CloseImg = styled.img`
  width: 100%;
`;

export const Body = styled.div`
  font-size: 1.2rem;
  margin-left: 2rem;
  align-self: flex-start;
  word-break: break-word;
`;

export const Heading = styled.h3``;

export const Content = styled.p``;

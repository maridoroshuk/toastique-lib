import styled from 'styled-components';
import { TOASTS } from '@/constants/variants';
import { WIDTH, ICON_WIDTH } from '@/constants/toastSizes';
import getSpaceBetweenToasts from '@/helpers/getSpaceBetweenToasts';

export const Container = styled.div`
  width: ${WIDTH};
  display: flex;
  z-index: 1000;
  position: relative;
  align-items: center;
  justify-content: flex-start;
  padding: ${({ theme: { spaces } }) => `${spaces.s}px ${spaces.l}px`};
  margin-bottom: ${({ gap }) => getSpaceBetweenToasts(gap)};
  color: ${({ variant, theme: { colors } }) => (variant === TOASTS.WARNING
    ? colors.black
    : colors.white)};
  background-color: ${({ color }) => color};
  border-radius: ${({ theme: { spaces } }) => `${spaces.l}px`};
  box-sizing: border-box;
  transition: 0.2s;
  font-family: sans-serif;
`;

export const Icon = styled.img`
  width: 100%;
  max-width: ${ICON_WIDTH};
`;

export const Close = styled.button`
  width: 10%;
  background-color: ${({ theme: { colors } }) => colors.transparent};
  border: none;
  position: absolute;
  top: ${({ theme: { spaces } }) => `${spaces.s}px`};
  right: ${({ theme: { spaces } }) => `${spaces.xxs}px`};
  cursor: pointer;
`;

export const CloseImg = styled.img`
  width: 100%;
  max-width: ${ICON_WIDTH};
`;

export const Body = styled.div`
  width: 100%;
  font-size: ${({ theme: { fontSizes } }) => `${fontSizes.m}px`};
  margin-left: ${({ theme: { spaces } }) => `${spaces.xl}px`};
  align-self: flex-start;
  word-break: break-word;
`;

export const Heading = styled.h3``;

export const Content = styled.p``;

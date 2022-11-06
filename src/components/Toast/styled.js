import styled from 'styled-components';
import { TOASTS } from '@/constants/variants';
import { GAP } from '@/constants/gap';
import { colors } from '@/theme/colors';
import { fontSizes, spaces } from '@/theme/sizes';

const WIDTH = '350px';
const ICON_WIDTH = '30px';

const handleMarginType = (gap) => {
  switch (gap) {
    case GAP.SMALL:
      return `${spaces.xxs}px`;
    case GAP.MEDIUM:
      return `${spaces.s}px`;
    case GAP.LARGE:
      return `${spaces.xl}px`;
    default:
      return `${spaces.s}px`;
  }
};

export const Container = styled.div`
  width: ${WIDTH};
  position: relative;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  padding: ${spaces.s}px ${spaces.l}px;
  margin-bottom: ${({ gap }) => handleMarginType(gap)};
  color: ${({ variant }) => (variant === TOASTS.WARNING
    ? `${colors.black}`
    : `${colors.white}`)};
  background-color: ${({ color }) => color};
  border-radius: ${spaces.l}px;
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
  background-color: ${colors.transparent};
  border: none;
  position: absolute;
  top: ${spaces.s}px;
  right: ${spaces.xxs}px;
  cursor: pointer;
`;

export const CloseImg = styled.img`
  width: 100%;
  max-width: ${ICON_WIDTH};
`;

export const Body = styled.div`
  width: 100%;
  font-size: ${fontSizes.m}px;
  margin-left: ${spaces.xl}px;
  align-self: flex-start;
  word-break: break-word;
`;

export const Heading = styled.h3``;

export const Content = styled.p``;

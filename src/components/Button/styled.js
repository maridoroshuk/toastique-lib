import styled from 'styled-components';
import { colors } from '@/theme/colors';
import { fontSizes, spaces } from '@/theme/sizes';

export const Container = styled.div`
  width: 100%;
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const StyledButton = styled.button`
  background-color: ${colors.transparent};
  border:  ${spaces.xs}px solid ${colors.blue};
  border-radius:  ${spaces.xxl}px ;
  position: absolute;
  top: 50%;
  right: 50%;
  transform: translate(50%, -50%);
  padding: ${spaces.l}px;
  margin: 0 auto;
  font-size:  ${fontSizes.m}px;
  letter-spacing:  ${spaces.xs}px;
  cursor: pointer;
  &:hover {
    background-color: ${colors.blue};
  }
`;

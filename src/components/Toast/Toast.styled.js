import { TOASTS } from "constants/variants";
import styled from "styled-components";

export const Container = styled.div`
  width: 20rem;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: flex-start;

  padding: 0.5rem 1rem;
  color: ${({ variant }) =>
    variant === TOASTS.WARNING ? "black" : "white"};
  font-family: sans-serif;

  border: none;
  border-radius: 0.3rem;
  box-sizing: border-box;
  box-shadow: 0px 0px 2px rgb(69, 69, 69);

  transition: 0.2s;
  animation: fadeIn 0.75s;

  &:hover {
    transition: 0.2s;
    transform: scale(0.95);
    box-shadow: 0px 0px 3px gray;
  }

  background-color: ${({ variant, color }) => {
    if (color) {
      return color;
    } else if (variant === TOASTS.INFO) {
      return "#9f86c0";
    } else if (variant === TOASTS.WARNING) {
      return "#fee440";
    } else if (variant === TOASTS.ERROR) {
      return "#d62828";
    } else if (variant === TOASTS.SUCCESS) {
      return "#57cc99";
    }
  }};
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
  top: 0.4rem;
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

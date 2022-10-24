import ToastPortal from "components/ToastPortal/ToastPortal";
import { AUTO_CLOSE, auto_close_time } from "constants/auto-close-time";
import { POSITION, positions } from "constants/position";
import { useCallback, useRef } from "react";
import Button from "../components/Button/Button";
import { TOASTS, variants } from "../constants/variants";

export default {
  title: "Toast",
  component: Button,
  argTypes: {
    autoCloseTime: {
      description: "Toast position",
      default: AUTO_CLOSE["5s"],
      options: auto_close_time,
      control: {
        type: "radio",
      },
    },
    position: {
      description: "Toast position",
      default: POSITION.TOP,
      options: positions,
      control: {
        type: "radio",
      },
    },
    variant: {
      type: "string",
      description: "Toast type",
      default: TOASTS.INFO,
      options: variants,
      control: {
        type: "radio",
      },
    },
  },
};

const Template = args => {
  const { variant, content, heading, color } = args;
  const toastRef = useRef();

  const handleShowToastClick = useCallback(() => {
    toastRef.current.addToast({ variant, content, heading, color });
  }, [variant]);

  return (
    <>
      <ToastPortal ref={toastRef} {...args} />
      <Button onClick={() => handleShowToastClick()} />
    </>
  );
};

export const Default = Template.bind({});
Default.args = {
  variant: TOASTS.INFO,
  position: POSITION.TOP,
  autoCloseTime: AUTO_CLOSE["5s"],
  heading: "",
  content: "",
  color: "#9f86c0",
};

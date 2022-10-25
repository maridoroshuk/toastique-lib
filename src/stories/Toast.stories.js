import ToastPortal from "components/ToastPortal/ToastPortal";
import { ANIMATION, animations } from "constants/animation";
import { AUTO_CLOSE, auto_close_time } from "constants/auto-close-time";
import { POSITION, positions } from "constants/position";
import { useRef } from "react";
import Button from "../components/Button/Button";
import { TOASTS, variants } from "../constants/variants";

export default {
  title: "Toast",
  component: Button,

  argTypes: {
    color: {
      description: "Color",
      control: {
        type: "color",
      },
    },
    animation: {
      description: "Toast position",
      default: ANIMATION.BOTTOM,
      options: animations,
      control: {
        type: "radio",
      },
    },
    autoCloseTime: {
      description: "Toast position",
      default: AUTO_CLOSE["5"],
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
  const { variant, content, heading, color, animation, position } = args;
  const toastRef = useRef();

  const handleShowToastClick = () => {
    toastRef.current.addToast({
      variant,
      content,
      heading,
      color,
      animation,
      position
    });
  };

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
  autoCloseTime: AUTO_CLOSE["5"],
  animation: ANIMATION.BOTTOM,
  heading: "",
  content: "",
};

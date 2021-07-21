import Button from "./Button.";
import "../../index.css";
import { HiLockClosed, HiXCircle, HiOutlineLogin } from "react-icons/hi";

const icons = { HiLockClosed, HiXCircle, HiOutlineLogin };

const Xyz = {
  title: "My Awesome Button",
  component: Button,
  argTypes: {
    theme: {
      control: { type: "select" },
    },
    Icon: {
      options: Object.keys(icons),
      mapping: icons,
      control: {
        type: "select",
      },
    },
  },
};

export const button = (args: any) => <Button {...args}></Button>;

button.args = {
  children: "Sign in",
  className: "",
  disabled: false,
  Icon: HiLockClosed,
};

export default Xyz;

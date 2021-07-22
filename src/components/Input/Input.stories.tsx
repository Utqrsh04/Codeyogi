import Input from "./Input";
import "../../index.css";
import { FaLock, FaUserAlt } from "react-icons/fa";
import { FiAtSign } from "react-icons/fi";

const icons = { FaLock, FaUserAlt, FiAtSign };


const func = {
  title: "My Awesome Input",
  component: Input,
  argTypes: {
    Icon: {
      options: Object.keys(icons),
      mapping: icons,
      control: {
        type: "select",
      },
    },
  }
};

export const input = (args: any) => <Input {...args}></Input>;

input.args = {
  error : "This field is required",
  Icon: FaLock,
  touched : false ,
};

export default func;

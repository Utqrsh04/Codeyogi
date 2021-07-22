import Input from "./Input";
import "../../index.css";
import { FaLock, FaUserAlt } from "react-icons/fa";
import { FiAtSign } from "react-icons/fi";
import { string } from "yup";

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
  placeholder : string,
  Icon: FaLock,
  error : "This field is required",
};

export default func;

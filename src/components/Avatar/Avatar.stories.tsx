import Avatar from "./Avatar";
import "../../index.css";

const func = {
  title: "My Awesome Avatar",
  component: Avatar,
  argTypes: {
    theme: {
      control: { type: "select" },
    },
  },
};

export const alert = (args: any) => <Avatar {...args}></Avatar>;

alert.args = {
  active: false,
  theme : "Large",
};

export default func;

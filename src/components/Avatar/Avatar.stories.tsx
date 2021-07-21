import Avatar from "./Avatar";
import "../../index.css";


const func = {
  title: "My Awesome Avatar",
  component: Avatar,
  argTypes: {
  },
};

export const alert = (args: any) => <Avatar {...args}></Avatar>;

alert.args = {
  active : false,
};

export default func;

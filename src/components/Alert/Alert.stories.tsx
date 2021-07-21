import Alert from "./Alert";
import "../../index.css";


const func = {
  title: "My Awesome Alert",
  component: Alert,
  argTypes: {
    alert: {
      control: { type: "select" },
    },
  },
};

export const alert = (args: any) => <Alert {...args}></Alert>;

alert.args = {
  alert: "Primary",
};

export default func;

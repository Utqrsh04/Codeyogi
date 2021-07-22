import ProgressBar from "./ProgressBar";
import "../../index.css";

const func = {
  title: "My Awesome Component",
  component: ProgressBar,
  argTypes: {
    theme: {
      control: { type: "select" },
    },
  },
};

export const Progress = (args: any) => <ProgressBar {...args}></ProgressBar>;

Progress.args = {
  progress: 70,
  theme : "Blue"
};

export default func;

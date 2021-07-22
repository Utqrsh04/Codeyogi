import ProgressBar from "./ProgressBar";
import "../../index.css";


const func = {
  title: "My Awesome ProgressBar",
  component: ProgressBar,
  argTypes: {
  },
};

export const Progress = (args: any) => <ProgressBar {...args}></ProgressBar>;

Progress.args = {
  progress : 70,
};

export default func;

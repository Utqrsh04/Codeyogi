import Card from "./Card";
import "../../index.css";

const func = {
  title: "My Awesome Card",
  component: Card,
  argTypes: {},
};

export const card = (args: any) => <Card {...args}></Card>;

card.args = {
  avatars: [],
  progress: 37,
};

export default func;

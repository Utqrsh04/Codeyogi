import Card from "./Card";
import "../../index.css";


const func = {
  title: "My Awesome Card",
  component: Card,
  argTypes: {
  },
};

export const card = (args: any) => <Card {...args}></Card>;

card.args = {
  avatars : 10,
  progress : 50,
};

export default func;

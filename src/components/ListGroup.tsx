import { FC, memo } from "react";
import List from "./List";

interface Props {}

const ListGroup: FC<Props> = (props) => {
  const details = [
    {
      Name: "Utkarsh",
      Group: "Full Stack",
    },
    {
      Name: "Shivam",
      Group: "Android",
    },
    {
      Name: "Tarun",
      Group: "ML",
    },
    {
      Name: "Priyansh",
      Group: "UI",
    },
    {
      Name: "Ashutosh",
      Group: "AI",
    },
  ];
  return (
    <>
      <div className="absolute sm:relative mx-auto">
        {details.map((data, index) => (
          <List
            key={index}
            idx={index}
            Name={data.Name}
            Profession={data.Group}
          />
        ))}
      </div>
    </>
  );
};

ListGroup.defaultProps = {};

export default memo(ListGroup);

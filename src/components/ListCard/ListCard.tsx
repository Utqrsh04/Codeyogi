import { FC, memo } from "react";
import { Group } from "../../models/Group";
import ListItem from "./ListItem";

interface Props {
  data: Group[];
}

const ListCard: FC<Props> = ({ data }) => {
  return (
    <div className="mx-auto bg-green-300 sm:w-3/6">
      {data.map((data, index) => (
        <ListItem
          key={index}
          index={index}
          id={data.id}
          Name={data.name}
          // Description={data.description}
        />
      ))}
    </div>
  );
};

ListCard.defaultProps = {
  data: [],
};

export default memo(ListCard);

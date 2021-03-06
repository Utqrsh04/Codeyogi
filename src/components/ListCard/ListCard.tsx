import { FC, memo } from "react";
import { Group } from "../../models/Group";
import ListItem from "./ListItem";

interface Props {
  data: Group[];
}

const ListCard: FC<Props> = ({ data }) => {
  return (
    <div className="mx-auto border-2 border-blue-600 rounded-lg sm:w-3/6 shadow-2xl">
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

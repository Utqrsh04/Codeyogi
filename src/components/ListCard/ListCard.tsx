import { FC, memo } from "react";
import { Group } from "../../models/Group";
import List from "./List";

interface Props {
  data: Group[];
}

const ListCard: FC<Props> = ({ data }) => {
  return (
    <>
      <div className="mx-auto sm:w-3/6">
        {data.map((data, index) => (
          <List
            key={index}
            index={index}
            id={data.id}
            Name={data.name}
            Description={data.description}
          />
        ))}
      </div>
    </>
  );
};

ListCard.defaultProps = {
  data: [],
};

export default memo(ListCard);

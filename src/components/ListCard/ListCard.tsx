import { FC, memo } from "react";
import { Group } from "../../models/Group";
import List from "./List";

interface Props {
  data: Group[];
}

const ListCard: FC<Props> = ({ data }) => {
  
  
  return (
    <>
      <div className=" fixed sm:relative mx-auto w-72 sm:w-3/6">
        { (data !== undefined ) && data.map((data, index) => (
          <List
            key={index}
            idx={index}
            Name={data.creator.first_name}
            Description={data.name}
            />
        ))}
      </div>
    </>
  );
};

ListCard.defaultProps = {};

export default memo(ListCard);

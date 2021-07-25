import { FC, memo } from "react";
import { GroupResponse } from "../../api";
import List from "./List";

interface Props {
  data: GroupResponse[];
}

const ListCard: FC<Props> = ({ data }) => {
  
  
  // let details : GroupResponse[] = [" "]

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

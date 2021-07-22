import { FC, memo } from "react";
import Avatar from "./Avatar";

interface Props {
  avatars: number;
  progress?: number;
}

const Card: FC<Props> = ({ avatars, progress }) => {
  let more = 0;
  let displayMore = true;
  if (avatars > 4) {
    more = avatars - 4;
  }

  if (more === 0) displayMore = false;

  return (
    <div className="space-y-4 border max-w-md border-blue-200 shadow-xl rounded-xl px-4 py-6 ">
      <div className=" flex justify-between ">
        <h1>Placed Order</h1>
        <h1 className=" bg-blue-100 text-blue-600 rounded-md py-1 px-2 font-light ">
          In Progress
        </h1>
      </div>
      <div className=" flex -space-x-4 items-center">
        <Avatar />
        <Avatar />
        <Avatar />
        <Avatar />
        {displayMore && (
          <span className="hover:-translate-y-1 transform  duration-500 rounded-full px-2 
          py-0.5 shadow-md text-sm bg-white text-blue-600">
            +{more} More
          </span>
        )}
      </div>
      <div className=" space-y-3">
        <h2 className="w-9 ml-auto mr-6 text-blue-600 ">{progress}%</h2>
        <div className="bg-gray-100 rounded-full">
          <div className=" h-2 w-6/12 bg-blue-700 rounded-full "></div>
        </div>
      </div>
    </div>
  );
};

Card.defaultProps = {
  avatars: 9,
};

export default memo(Card);

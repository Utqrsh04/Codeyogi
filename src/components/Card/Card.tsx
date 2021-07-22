import { FC, memo } from "react";
import AvatarStack from "./AvatarStack";

interface Props {
  avatars: string[];
  progress: number;
}

const Card: FC<Props> = ({ avatars, progress }) => {
  avatars = [
    "https://www.lifeofpix.com/wp-content/uploads/2016/12/avatar.png",
    "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8YXZhdGFyfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
    "https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
    "https://images.unsplash.com/photo-1553867745-6e038d085e86?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=513&q=80",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTIAmQSLj7TZA-rgBipOxmlEfEPaMJ3Fb2DltKHXlPvxLCoRTUqZ753AeEoKobOQzMWMP0&usqp=CAU",
    ...avatars,
  ];
  
  return (
    <div className="space-y-4 border max-w-md border-blue-200 shadow-xl rounded-xl px-4 py-6 ">
      <div className=" flex justify-between ">
        <h1>Placed Order</h1>
        <h1 className=" bg-blue-100 text-blue-600 rounded-md py-1 px-2 font-light ">
          In Progress
        </h1>
      </div>
      <AvatarStack avatars={avatars} />
      <div className=" space-y-3">
        <h2 className="w-9 ml-auto mr-6 text-blue-600 ">{progress}%</h2>
        <div className="bg-gray-200 rounded-full">
          <div className=" h-2  bg-blue-700 rounded-full " 
         style={{width: `${progress}%`}} ></div>
        </div>
      </div>
    </div>
  );
};

Card.defaultProps = {
  avatars: []
};

export default memo(Card);

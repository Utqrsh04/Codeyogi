import { FC, memo } from "react";

interface Props {
  active: boolean;
}

const Avatar: FC<Props> = ({ active }) => {
  let classname = "";
  if(active)
    classname = "bg-blue-700"
  else
    classname = "bg-gray-300"  
  return (
    <div className="">
      <div className="rounded-full bg-red-400 w-16 h-16">
        <div className={" ml-12 border-4 absolute mt-10 w-4 h-4 rounded-full " + classname} ></div>
      </div>
    </div>
  );
};

Avatar.defaultProps = {
  active : true
};

export default memo(Avatar);

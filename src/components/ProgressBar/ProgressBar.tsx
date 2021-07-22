import { FC, memo } from "react";

interface Props {
  progress : number
}

const ProgressBar: FC<Props> = ({progress}) => {

  const width = progress/100;
  const classname = "w-1/"+width;
  console.log(width , classname);
  
  
  return (
    <>
      <div className="space-y-3">
        <h2 className="w-9 ml-auto mr-6 ">{progress}%</h2>
        <div className="bg-gray-200 rounded-full">
          <div className=" h-2  bg-blue-700 rounded-full " 
         style={{width: `${progress}%`}} ></div>
        </div>
      </div>
    </>
  );
};

ProgressBar.defaultProps = {
  progress : 50,
};

export default memo(ProgressBar);

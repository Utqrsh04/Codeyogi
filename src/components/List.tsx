import { FC, memo } from "react";

interface Props {
  idx : number ;
  Name : string;
  Profession : string;
}

const List: FC<Props> = ({idx, Name , Profession}) => {

  

  let themeClass = "";
  if(idx % 2  === 0 )
    themeClass = " bg-gray-200 "
  else
    themeClass = "bg-white"

  console.log(idx , Name , Profession);
    
  return (
    <>
      <div className={" px-3 h-14 w-80 border border-gray-200 flex items-center " + themeClass}>
        <img className=" w-10 h-10 rounded-full "
          src="https://www.lifeofpix.com/wp-content/uploads/2016/12/avatar.png"
          alt=""
        />
        <div className=" px-2 text-left ">
          <h1 className=" font-medium ">{Name}</h1>
          <h2 className=" text-xs ">{Profession}</h2>
        </div>
      </div>
    </>
  );
};

List.defaultProps = {
  idx : 1 ,
  Name : "Utkarsh" ,
  Profession : "Software Developer" 

};

export default memo(List);

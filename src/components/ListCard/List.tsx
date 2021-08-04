import { FC, memo } from "react";

interface Props {
  idx: number;
  Name?: string;
  Description?: string;
}

const List: FC<Props> = ({ idx, Name, Description }) => {
  let themeClass = "";
  if (idx % 2 === 0) themeClass = " bg-gray-200 ";
  else themeClass = "bg-white";

  // console.log(idx , Name , Description);

  return (
    <div
      className={
        " px-3 h-12 w-full border border-gray-200 flex items-center " +
        themeClass
      }
    >
      <img
        className=" w-10 h-10 rounded-full "
        src="https://images.unsplash.com/photo-1607990281513-2c110a25bd8c?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=547&q=80"
        alt=""
      />
      <div className=" px-2 text-left ">
        <h1 className=" font-medium ">{Name}</h1>
        <h2 className=" text-xs ">{Description}</h2>
      </div>
    </div>
  );
};

List.defaultProps = {
  idx: 1,
  Name: "Utkarsh",
  Description: "Software Developer",
};

export default memo(List);

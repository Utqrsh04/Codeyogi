import { FC, memo } from "react";
import { Link } from "react-router-dom";
import grpImg from "../../images/grpImg.jpg";

interface Props {
  index: number;
  Name?: string;
  Description?: string;
  id: number;
}

const ListItem: FC<Props> = ({ index, Name, Description, id }) => {
  let themeClass = "";
  if (index % 2 === 0) themeClass = " bg-gray-200 ";
  else themeClass = "bg-white";

  // console.log(id, Name);

  return (
    <div
      className={
        " px-3 h-12 w-full border border-gray-200 flex items-center " +
        themeClass
      }
    >
      <img className=" w-10 h-10 rounded-full " src={grpImg} alt="" />
      <div className=" px-2 text-left ">
        <Link to={"/groups/" + id} className="font-bold">
          {Name}
        </Link>
        <h2 className=" text-xs ">{Description}</h2>
      </div>
    </div>
  );
};

ListItem.defaultProps = {
  index: 1,
  Name: "Utkarsh",
  // Description: "Software Developer",
};

export default memo(ListItem);

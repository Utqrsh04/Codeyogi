import { FC, memo } from "react";
import { useHistory } from "react-router-dom";

interface Props {
  index: number;
  Name?: string;
  Description?: string;
  id: number;
}

const List: FC<Props> = ({ index, Name, Description, id }) => {
  let themeClass = "";
  if (index % 2 === 0) themeClass = " bg-gray-200 ";
  else themeClass = "bg-white";

  // console.log(id, Name);
  const history = useHistory();

  const handleClick = () => {
    history.push(`/groupdata/${id}`);
  };

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
        <button type="button" onClick={handleClick}>
          {Name}
        </button>
        <h2 className=" text-xs ">{Description}</h2>
      </div>
    </div>
  );
};

List.defaultProps = {
  index: 1,
  Name: "Utkarsh",
  Description: "Software Developer",
};

export default memo(List);

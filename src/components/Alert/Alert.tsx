import { FC, memo } from "react";
import { HiOutlineX } from "react-icons/hi";

interface Props {
  alert: "Primary" | "Warning" | "Sucess" | "Error";
  alertMessage?: string;
}

const Alert: FC<Props> = ({ alert, alertMessage }) => {
  let className = "";

  if (alert === "Primary") className = "bg-blue-300 text-blue-600";
  else if (alert === "Warning") className = "bg-yellow-300 text-yellow-600";
  else if (alert === "Sucess") className = "bg-green-300 text-green-600";
  else if (alert === "Error") className = "bg-red-300 text-red-600";

  return (
    <>
      <div
        className={
          " rounded-md h-10 flex items-center px-4 justify-between " + className
        }
      >
        <h1>
          <strong>{alert}!</strong> {alertMessage}
        </h1>
        <button type="button" onClick={() => console.log("Button Clicked")}>
          <HiOutlineX className=" w-5 h-5  " />{" "}
        </button>
      </div>
    </>
  );
};

Alert.defaultProps = {
  alert: "Primary",
  alertMessage: "Lorem Ipsum is simply dummy text of the printing",
};

export default memo(Alert);

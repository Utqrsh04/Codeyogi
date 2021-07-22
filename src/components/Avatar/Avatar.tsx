import { FC, memo } from "react";

interface Props {
  active: boolean;
  theme?: "Large" | "Medium" | "Small";
}

const Avatar: FC<Props> = ({ active, theme }) => {
  let classname = "";
  let themeClass = "";
  if (theme === "Large") {
    themeClass = " w-20 h-20 ";
    classname = "ml-14 -mt-4 ";
  }
  else if (theme === "Medium") {
    themeClass = " w-16 h-16";
    classname = "ml-12 -mt-4 ";
    
  }
  else if (theme === "Small") {
    themeClass = " w-12 h-12";
    classname = "ml-8 -mt-4 ";
  }

  let activeClass = "";
  if (active) activeClass = "bg-blue-700";
  else activeClass = "bg-gray-300";

  return (
    <div className="">
      <div className={" bg-red-400 " + themeClass}>
        <img className=" rounded-full "
          src="https://www.lifeofpix.com/wp-content/uploads/2016/12/avatar.png"
          alt=""
        />
        <div
          className={
            "border-4 absolute w-4 h-4 rounded-full " + classname
          + " " + activeClass }
        ></div>
      </div>
    </div>
  );
};

Avatar.defaultProps = {
  active: true,
  theme: "Medium",
};

export default memo(Avatar);

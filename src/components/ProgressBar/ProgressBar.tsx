import { FC, memo } from "react";

interface Props {
  progress: number;
  theme: "Blue" | "Red" | "Gray";
}

const ProgressBar: FC<Props> = ({ progress, theme }) => {
  
  let themeClass = "";
  if (theme === "Red") themeClass = "bg-red-";
  else if (theme === "Blue") themeClass = "bg-blue-";
  else if (theme === "Gray") themeClass = "bg-gray-";

  return (
    <div className=" max-w-2xl mx-auto ">
      <div className="space-y-3">
        <h2 className="w-9 ml-auto mr-6 ">{progress}%</h2>
        <div className={"rounded-full " + themeClass+"200"}>
          <div
            className={" h-2  rounded-full  " + themeClass+"500"}
            style={{ width: `${progress}%` }}
          ></div>
        </div>
      </div>
    </div>
  );
};

ProgressBar.defaultProps = {
  progress: 50,
};

export default memo(ProgressBar);

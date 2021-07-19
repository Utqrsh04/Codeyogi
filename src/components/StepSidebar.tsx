import { ReactElement } from "react";
import { FC, memo } from "react";

interface Props {
  menu: string;
  icon?: ReactElement;
}

const StepSidebar: FC<Props> = ({ menu , icon }) => {
  return (
    <div>
      <div className="flex w-40 px-3 py-3 text-sm font-medium text-black bg-white rounded-md hover:bg-gray-300 ">
        <div className="w-5 h-5 text-gray-800" >
        {icon}
        </div>
        <h1 className=" mx-auto">{menu}</h1>
      </div>
    </div>
  );
};

StepSidebar.defaultProps = {
  menu: "Button",
};

export default memo(StepSidebar);

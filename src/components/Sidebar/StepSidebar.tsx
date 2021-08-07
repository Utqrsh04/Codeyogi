import { FC, memo } from "react";
import { IconType } from "react-icons";

interface Props {
  menu: string;
  Icon: IconType;
}

const StepSidebar: FC<Props> = ({ menu, Icon }) => {
  return (
    <div>
      <a href={"/" + menu} className="block mx-auto">
        <div className="flex w-40 px-3 py-3 text-sm font-medium text-black bg-white rounded-md hover:bg-gray-300 ">
          <Icon className="w-4 h-4 text-gray-800" />
          <h1 className=" mx-auto ">{menu}</h1>
        </div>
      </a>
    </div>
  );
};

StepSidebar.defaultProps = {
  menu: "Button",
};

export default memo(StepSidebar);

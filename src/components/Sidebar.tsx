import { FC, memo } from "react";
import SidebarComponent from "./SidebarComponent";

interface Props {}

const Sidebar: FC<Props> = (props) => {
  return (
    <div className="fixed flex-col px-5 pt-4 space-y-2 h-screen w-52 bg-gray-200 ">
      <SidebarComponent />
      <SidebarComponent />
      <SidebarComponent />
      <SidebarComponent />
      <SidebarComponent />
    </div>
  );
};

Sidebar.defaultProps = {};

export default memo(Sidebar);

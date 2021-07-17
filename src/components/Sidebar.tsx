import { Fragment, FC, memo } from "react";
import { Transition } from "@headlessui/react";
import SidebarComponent from "./SidebarComponent";

interface Props {
  classes: boolean;
}

const Sidebar: FC<Props> = ({ classes }) => {

  return (
    <div>
      <Transition
        as={Fragment}
        show={!classes}
        enter="transform transition duration-[700ms]"
        enterFrom="opacity-0 -translate-x-14 "
        enterTo="opacity-100 translate-x-0 "
        leave="transform duration-400 transition ease-in-out"
        leaveFrom="opacity-100 translate-x-0 "
        leaveTo="opacity-0 -translate-x-14 "
      >
        <div className="fixed  flex-col px-5 pt-4 space-y-2 h-screen bg-gray-100">
          <SidebarComponent />
          <SidebarComponent />
          <SidebarComponent />
          <SidebarComponent />
          <SidebarComponent />
        </div>
      </Transition>
    </div>
  );
};

Sidebar.defaultProps = {};

export default memo(Sidebar);

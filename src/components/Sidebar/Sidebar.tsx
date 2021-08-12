import { Fragment, FC, memo } from "react";
import { Transition } from "@headlessui/react";
import StepSidebarDropdown from "./StepSidebarDropdown";
import StepSidebar from "./StepSidebar";
import {
  FiLock,
  FiHome,
  FiCpu,
  FiMap,
  FiPieChart,
  FiBook,
} from "react-icons/fi";
import { ImStack } from "react-icons/im";
import {  AiOutlineThunderbolt } from "react-icons/ai";
import { useAppSelector } from "../../store";

interface Props {
  // classes: boolean;
}

const Sidebar: FC<Props> = () => {
  const sidebar = useAppSelector((state) => state.sidebar.isOpen);
  // const classes = 
  return (
    <>
      {/* <button
              className=" m-2 w-6 h-6"
              onClick={() =>
                sidebar
                  ? sidebarActions.sidebar(false)
                  : sidebarActions.sidebar(true)
              }
            >
              <GiHamburgerMenu />
            </button> */}
      <Transition
        as={Fragment}
        show={sidebar}
        enter="transform transition duration-[700ms]"
        enterFrom="opacity-0 -translate-x-14 "
        enterTo="opacity-100 translate-x-0 "
        leave="transform duration-400 transition ease-in-out"
        leaveFrom="opacity-100 translate-x-0 "
        leaveTo="opacity-0 -translate-x-14 "
      >
        <div className="w-52 space-y-2 rounded-lg bg-gray-200 px-5 py-5 fixed mt-28 z-50 ">
          <StepSidebar menu="Dashboard" Icon={FiHome} />
          <StepSidebar menu="Groups" Icon={FiBook} />

          <StepSidebarDropdown
            menu="Apps"
            items={["Chat", "Mailbox", "Notes", "Scrumboard"]}
            Icon={FiCpu}
          />
          
          <StepSidebarDropdown
            menu="Elements"
            items={["Alerts", "Avatars", "Buttons"]}
            Icon={AiOutlineThunderbolt}
          />
          <StepSidebar menu="Authentication" Icon={FiLock} />
          <StepSidebar menu="DataTables" Icon={ImStack} />
          <StepSidebar menu="Maps" Icon={FiMap} />
          <StepSidebar menu="Charts" Icon={FiPieChart} />
        </div>
      </Transition>
    </>
  );
};

Sidebar.defaultProps = {};

export default memo(Sidebar);

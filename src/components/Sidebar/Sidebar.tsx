import { Fragment, FC, memo } from "react";
import { Transition } from "@headlessui/react";
import DropdownMenu from "./DropdownMenu";
import StepSidebar from "./StepSidebar";
import {
  FiLock,
  FiHome,
  FiCpu,
  FiMap,
  FiPieChart,
  FiBook,
  FiTablet,
  FiRadio,
} from "react-icons/fi";
import { ImStack } from "react-icons/im";
import {  AiOutlineThunderbolt } from "react-icons/ai";
import { useAppSelector } from "../../store";
import { FaCreativeCommonsNd } from "react-icons/fa";

interface Props {
}

const Sidebar: FC<Props> = () => {
  const sidebar = useAppSelector((state) => state.sidebar.isOpen);
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
        <div className="w-56 space-y-2 rounded-sm overflow-y-scroll bg-gray-200 px-5 py-5 fixed top-28 z-40 bottom-0 ">
          <StepSidebar menu="Dashboard" Icon={FiHome} />
          <StepSidebar menu="Groups" Icon={FiBook} />
          <StepSidebar menu="Recordings" Icon={FiRadio} />

          <DropdownMenu
            menu="Apps"
            items={["Chat", "Mailbox", "Notes", "Scrumboard"]}
            Icon={FiCpu}
          />
          
          <DropdownMenu
            menu="Elements"
            items={["Alerts", "Avatars", "Buttons"]}
            Icon={AiOutlineThunderbolt}
          />


          <StepSidebar menu="Authentication" Icon={FiLock} />
          <StepSidebar menu="DataTables" Icon={ImStack} />
          <DropdownMenu
            menu="Components"
            items={["Tables", "Graphs", "Pie Chart", "Histogram"]}
            Icon={FaCreativeCommonsNd}
          />   
          <StepSidebar menu="Maps" Icon={FiMap} />
          <StepSidebar menu="Tables" Icon={FiTablet} />
          <StepSidebar menu="Charts" Icon={FiPieChart} />
        </div>
      </Transition>
    </>
  );
};

Sidebar.defaultProps = {};

export default memo(Sidebar);

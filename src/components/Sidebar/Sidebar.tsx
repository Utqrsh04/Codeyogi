import { Fragment, FC, memo } from "react";
import { Transition } from "@headlessui/react";
import StepSidebarDropdown from "./StepSidebarDropdown";
import StepSidebar from "./StepSidebar";
import { FiLock, FiMap, FiPieChart } from "react-icons/fi";
import { IoMdDesktop, IoMdDocument } from "react-icons/io";
import { ImStack } from "react-icons/im";
import { AiOutlineForm, AiOutlineThunderbolt } from "react-icons/ai";
import { GrCube } from "react-icons/gr";

interface Props {
  classes: boolean;
}

const Sidebar: FC<Props> = ({ classes }) => {
  return (
    <div className="z-50">
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
        <div className="w-52 space-y-2 rounded-lg bg-gray-200 px-5  py-5 ">
          <StepSidebarDropdown
            menu="Form"
            items={["Chat", "Mailbox", "Todo List", "Notes", "Scrumboard"]}
            Icon={AiOutlineForm}
          />
          <StepSidebarDropdown
            menu="Elements"
            items={["Alerts", "Avatars", "Badges", "Buttons"]}
            Icon={AiOutlineThunderbolt}
          />
          <StepSidebar menu="Authentication" Icon={FiLock} />
          <StepSidebar menu="DataTables" Icon={ImStack} />
          <StepSidebar menu="Widgets" Icon={IoMdDesktop} />
          <StepSidebar menu="Pages" Icon={IoMdDocument} />
          <StepSidebarDropdown
            menu="Components"
            items={["Tabs", "Accordians", "Modal", "Cards", "Counter"]}
            Icon={GrCube}
          />

          <StepSidebar menu="Maps" Icon={FiMap} />
          <StepSidebar menu="Charts" Icon={FiPieChart} />
        </div>
      </Transition>
    </div>
  );
};

Sidebar.defaultProps = {};

export default memo(Sidebar);

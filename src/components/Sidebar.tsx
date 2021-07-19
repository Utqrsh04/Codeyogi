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
    <div className="absolute flex-col px-5 py-4 bg-gray-100">
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
        <div className="space-y-2">
          <StepSidebarDropdown
            menu="Form"
            items={["Chat", "Mailbox", "Todo List", "Notes", "Scrumboard"]}
            icon={<AiOutlineForm />}
          />
          <StepSidebarDropdown
            menu="Elements"
            items={["Alerts", "Avatars", "Badges", "Buttons"]}
            icon={<AiOutlineThunderbolt />}
          />
          <StepSidebar menu="Authentication" icon={<FiLock />} />
          <StepSidebar menu="DataTables" icon={<ImStack />} />
          <StepSidebar menu="Widgets" icon={<IoMdDesktop />} />
          <StepSidebar menu="Pages" icon={<IoMdDocument />} />
          <StepSidebarDropdown
            menu="Components"
            items={["Tabs", "Accordians", "Modal", "Cards", "Counter"]}
            icon={<GrCube />}
          />

          <StepSidebar menu="Maps" icon={<FiMap />} />
          <StepSidebar menu="Charts" icon={<FiPieChart />} />
        </div>
      </Transition>
    </div>
  );
};

Sidebar.defaultProps = {};

export default memo(Sidebar);

import { Fragment, FC, memo } from "react";
import { MdKeyboardArrowDown } from "react-icons/md";
import { BiHomeAlt } from "react-icons/bi";
import { Menu, Transition } from "@headlessui/react";

interface Props {}

const SidebarComponent: FC<Props> = (props) => {
  return (
    <Menu as="div" className="">
      <div>
        <Menu.Button className="inline-flex justify-between w-40 px-3 py-3 text-sm font-medium text-black bg-white rounded-md hover:bg-gray-300 ">
          <BiHomeAlt className=" w-5 h-5 text-gray-800" />
          Dashboard
          <MdKeyboardArrowDown className=" my-auto" />
        </Menu.Button>
      </div>
      <Transition
        as={Fragment}
        enter="transition ease-out duration-100"
        enterFrom="transform opacity-0 scale-95"
        enterTo="transform opacity-100 scale-100"
        leave="transition ease-in duration-75"
        leaveFrom="transform opacity-100 scale-100"
        leaveTo="transform opacity-0 scale-95"
      >
        <Menu.Items className="absolute w-40 mt-2 origin-top-right bg-gray-200 divide-y divide-gray-100 rounded-md shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
          <div className="px-1 py-1 ">
            <Menu.Item>
              {({ active }) => (
                <button
                  className={`${
                    active ? " text-blue-600" : "text-gray-900"
                  } group flex rounded-md justify-center items-center w-full px-2 py-2 text-sm`}
                >
                  Sales
                </button>
              )}
            </Menu.Item>
            <Menu.Item>
              {({ active }) => (
                <button
                  className={`${
                    active ? "text-blue-600" : "text-gray-900"
                  } group flex rounded-md justify-center items-center w-full px-2 py-2 text-sm`}
                >
                  Analytics
                </button>
              )}
            </Menu.Item>
          </div>
        </Menu.Items>
      </Transition>
    </Menu>
  );
};

SidebarComponent.defaultProps = {};

export default memo(SidebarComponent);

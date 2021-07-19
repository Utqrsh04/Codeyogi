import { Fragment, FC, memo, ReactElement } from "react";
import { MdKeyboardArrowDown } from "react-icons/md";
import { Menu, Transition } from "@headlessui/react";

interface Props {
  menu: string;
  items: string[];
  icon: ReactElement;
}

const StepSidebarComponent: FC<Props> = ({ menu, items, icon }) => {
  return (
    <Menu as="div" className="">
      <div>
        <Menu.Button className="inline-flex ease-in-out justify-between w-40 px-3 py-3 text-sm font-medium text-black bg-white rounded-md hover:bg-gray-300 ">
          <div className="w-5 h-5 text-gray-800">{icon}</div>
          <h1>{menu}</h1>
          <MdKeyboardArrowDown className=" my-auto" />
        </Menu.Button>
      </div>
      <Transition
        as={Fragment}
        enter="transition ease-in-out duration-300"
        enterFrom="transform opacity-0 scale-95"
        enterTo="transform opacity-100 scale-100"
        leave="transition ease-in-out duration-200"
        leaveFrom="transform opacity-100 scale-100"
        leaveTo="transform opacity-0 scale-95"
      >
        <Menu.Items className="w-40 mx-auto mt-2 bg-gray-200 rounded-md shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
          <div className="p-1">
            {items.map((data, index) => {
              // console.log(data, index);
              return (
                <Menu.Item>
                  {({ active }) => (
                    <button
                      key={index}
                      className={`${
                        active
                          ? "bg-violet-500  text-blue-600"
                          : "text-gray-900"
                      }  flex rounded-md items-center mx-auto py-2 text-sm`}
                    >
                      {data}
                    </button>
                  )}
                </Menu.Item>
              );
            })}
          </div>
        </Menu.Items>
      </Transition>
    </Menu>
  );
};

StepSidebarComponent.defaultProps = {};

export default memo(StepSidebarComponent);

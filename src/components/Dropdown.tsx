import { Fragment, FC, memo } from "react";
import { Menu, Transition } from "@headlessui/react";
import { MdKeyboardArrowDown } from "react-icons/md";

interface Props {
  items: string[];
  children?: string;
  needArrowIcon?: boolean;
}
const Dropdown: FC<Props> = ({ items, children, needArrowIcon }) => {
  return (
    <div className="w-36 ">
      <Menu as="div" className=" inline-block ">
        <div>
          <Menu.Button className=" relative inline-flex justify-center w-full px-3 py-2 text-sm font-medium text-black border border-black rounded-md bg-opacity-20 hover:bg-opacity-30 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75">
            {children}
            {needArrowIcon && <MdKeyboardArrowDown className=" my-auto" />}
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
          <Menu.Items className="mt-2 origin-top-right relative z-40 bg-white divide-y divide-gray-100 rounded-md shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
            <div className="px-1 py-1 ">
              {items.map((data, index) => {
                // console.log(data, index);
                return (
                  <Menu.Item key={index}>
                    {({ active }) => (
                      <button
                        className={`${
                          active
                            ? "bg-violet-500  text-blue-600"
                            : "text-gray-900"
                        } group flex rounded-md items-center w-full px-2 py-2 text-sm`}
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
    </div>
  );
};

Dropdown.defaultProps = {
  items: ["item1", "item2", "item3", "item4"],
};

export default memo(Dropdown);

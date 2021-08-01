import { Fragment, FC, memo } from "react";
import { Menu, Transition } from "@headlessui/react";
import { Logout } from "../api";
import { IconType } from "react-icons";

interface Props {
  imageUrl?: string;
  Icon?: IconType;
}
const DropDownHeader: FC<Props> = ({ imageUrl, Icon }) => {
  return (
    <Menu as="div" className="relative inline-block text-left">
      {({ open }) => (
        <>
          <div>
            <Menu.Button
              className="inline-flex justify-center items-center 
             rounded-md py-2"
            >
              {imageUrl && (
                <img
                  src={imageUrl}
                  alt={imageUrl}
                  className=" rounded-lg h-8 w-8 "
                />
              )}
              {Icon && <Icon className=" text-white rounded-lg h-8 w-8 " />}
            </Menu.Button>
          </div>

          <Transition
            show={open}
            as={Fragment}
            enter="transition ease-out duration-100"
            enterFrom="transform opacity-0 scale-95"
            enterTo="transform opacity-100 scale-100"
            leave="transition ease-in duration-75"
            leaveFrom="transform opacity-100 scale-100"
            leaveTo="transform opacity-0 scale-95"
          >
            <Menu.Items
              static
              className="origin-top-right absolute right-0 mt-2 w-40 z-50 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none"
            >
              <div className="px-1 py-1 ">
                <Menu.Item>
                  {({ active }) => (
                    <a href="/profile" className="block px-4 py-2 text-sm">
                      Profile
                    </a>
                  )}
                </Menu.Item>
                <Menu.Item>
                  {({ active }) => (
                    <a href="/not-found" className="block px-4 py-2 text-sm">
                      Inbox
                    </a>
                  )}
                </Menu.Item>
                <Menu.Item>
                  {({ active }) => (
                    <a href="/not-found" className="block px-4 py-2 text-sm">
                      Lock Screen
                    </a>
                  )}
                </Menu.Item>

                <Menu.Item>
                  {({ active }) => (
                    <button
                      onClick={() => {
                        Logout();
                        window.location.href = "/login";
                      }}
                      className="block px-4 py-2 text-sm"
                    >
                      Sign out
                    </button>
                  )}
                </Menu.Item>
              </div>
            </Menu.Items>
          </Transition>
        </>
      )}
    </Menu>
  );
};

DropDownHeader.defaultProps = {};

export default memo(DropDownHeader);

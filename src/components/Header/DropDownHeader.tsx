import { Fragment, FC, memo } from "react";
import { Menu, Transition } from "@headlessui/react";
import { logout } from "../../api";
import { IconType } from "react-icons";
import { Link } from "react-router-dom";

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
            enter="transition duration-200 ease-in-out"
            enterFrom="transform translate-y-4 opacity-0"
            enterTo="transform translate-y-0 opacity-100"
            leave="transition duration-200 ease-in-out"
            leaveFrom="transform translate-y-0 opacity-100"
            leaveTo="transform translate-y-4 opacity-0"
          >
            <Menu.Items
              static
              className="origin-top-right absolute right-0 mt-0.5 w-40 z-50 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none"
            >
              <div
                  className="absolute -top-2 right-3"
                  style={{
                    borderBottom: "15px solid #fff",
                    borderLeft: "9px solid transparent",
                    borderRight: "9px solid transparent",
                  }}
                ></div>
              <div className="px-1 py-1 ">
                <Menu.Item>
                  {({ active }) => (
                    <Link to={"/profile" } className="block px-4 py-2 text-sm">
                      Profile
                    </Link>
                  )}
                </Menu.Item>
                <Menu.Item>
                  {({ active }) => (
                    <Link to={"/not-found"} className="block px-4 py-2 text-sm">
                      Inbox
                    </Link>
                  )}
                </Menu.Item>
                <Menu.Item>
                  {({ active }) => (
                    <Link to={"/not-found"} className="block px-4 py-2 text-sm">
                      Lock Screen
                    </Link>
                  )}
                </Menu.Item>

                <Menu.Item>
                  {({ active }) => (
                    <button
                      onClick={() => {
                        logout();
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

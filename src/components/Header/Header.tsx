import { FC, Fragment, memo } from "react";
import { Link } from "react-router-dom";
import { Menu, Transition } from "@headlessui/react";
import DropDownHeader from "./DropDownHeader";
import { MdNotificationsNone } from "react-icons/md";
import { FiFileText, FiHeart, FiSearch, FiServer } from "react-icons/fi";
import { BsSearch } from "react-icons/bs";
import grpImg from "../../images/grpImg.jpg";
import Flag1 from "../../images/Flags/caFlag.png";
import Flag2 from "../../images/Flags/deFlag.png";
import Flag3 from "../../images/Flags/jpFlag.png";
import Flag4 from "../../images/Flags/frFlag.png";

interface Props {}

const Header: FC<Props> = (props) => {
  return (
    <>
      <header className="flex flex-row justify-between h-14 bg-gray-900 w-screen ">
        <div className="flex items-center">
          <img
            src="https://designreset.com/cork/ltr/demo4/assets/img/logo.svg"
            className="text-white m-3 w-8 h-8 "
            alt="logo"
          />
          <h1 className="hidden sm:block font-semibold text-3xl text-white ">
            Cork
          </h1>
          <div className="items-center hidden border border-opacity-0 rounded-md md:flex bg-gray-800 ml-10 h-9 focus-within:border-opacity-100 focus-within:border-dark-300">
            <BsSearch className="w-4.5 h-4.5 mx-2.5" />
            <form action="">
              <input
                type="text"
                name="searchbar"
                id="header_searchbar"
                placeholder="Search..."
                className="text-sm focus:outline-none focus:placeholder-opacity-20 font-semibold bg-gray-800 w-80"
              />
            </form>
          </div>
        </div>
        <div className="flex flex-row items-center justify-around pr-10 ">
          <FiSearch className=" text-white m-2 w-8 h-8 " />

          <Menu>
            <Menu.Button>
              <img src={Flag1} className="w-7 h-7 m-2" alt="Canadian Flag" />
            </Menu.Button>
            <Transition
              as={Fragment}
              enter="transition duration-200 ease-in-out"
              enterFrom="transform translate-y-4 opacity-0"
              enterTo="transform translate-y-0 opacity-100"
              leave="transition duration-200 ease-in-out"
              leaveFrom="transform translate-y-0 opacity-100"
              leaveTo="transform translate-y-4 opacity-0"
            >
              <Menu.Items className="absolute py-2 text-sm mt-1 bg-white border rounded text-dark-200 top-12 right-24">
                
              <div
                  className="absolute -top-2 right-9"
                  style={{
                    borderBottom: "15px solid #fff",
                    borderLeft: "9px solid transparent",
                    borderRight: "9px solid transparent",
                  }}
                ></div>

                <Menu.Item>
                  <Link
                    to={"/not-found"}
                    className="flex px-4 py-1.5 hover:text-primary-200"
                  >
                    <img
                      src={Flag2}
                      className="w-5 h-5 mr-4"
                      alt="German Flag"
                    />
                    <p>German</p>
                  </Link>
                </Menu.Item>
                <Menu.Item>
                  <Link
                    to={"/not=found"}
                    className="flex px-4 py-1.5 hover:text-primary-200"
                  >
                    <img
                      src={Flag4}
                      className="w-5 h-5 mr-4"
                      alt="Japanese Flag"
                    />
                    <p>Japanese</p>
                  </Link>
                </Menu.Item>
                <Menu.Item>
                  <Link
                    to={"/not=found"}
                    className="flex px-4 py-1.5 hover:text-primary-200"
                  >
                    <img
                      src={Flag3}
                      className="w-5 h-5 mr-4"
                      alt="French Flag"
                    />
                    <p>French</p>
                  </Link>
                </Menu.Item>
              </Menu.Items>
            </Transition>
          </Menu>

          <Menu>
            <Menu.Button className="">
              <MdNotificationsNone className="text-white m-2 w-8 h-8 "  />
            </Menu.Button>
            <Transition
              as={Fragment}
              enter="transition duration-200 ease-in-out"
              enterFrom="transform translate-y-4 opacity-0"
              enterTo="transform translate-y-0 opacity-100"
              leave="transition duration-200 ease-in-out"
              leaveFrom="transform translate-y-0 opacity-100"
              leaveTo="transform translate-y-4 opacity-0"
            >
              <Menu.Items className="absolute p-3 text-sm mt-1 bg-white border rounded text-dark-200 top-12 right-14">
              <div
                  className="absolute -top-2 right-8"
                  style={{
                    borderBottom: "15px solid #fff",
                    borderLeft: "9px solid transparent",
                    borderRight: "9px solid transparent",
                  }}
                ></div>
                <Menu.Item>
                  <Link
                    to={"/not-found"}
                    className=" group px-4 py-2.5 flex items-center "
                  >
                    <FiServer className="mr-2 text-green-500 " />
                    <div className="flex items-center justify-between w-38.5">
                      <div>
                        <h6 className="group-hover:text-primary-200">
                          Server Rebooted
                        </h6>
                      </div>
                    </div>
                  </Link>
                </Menu.Item>
                <Menu.Item>
                  <Link
                    to={"/not-found"}
                    className=" group px-4 py-2.5 flex items-center border-t border-gray-200"
                  >
                    <FiHeart className=" mr-2 text-yellow-500 " />
                    <div className="flex items-center justify-between w-38.5">
                      <div>
                        <h6 className="group-hover:text-primary-200">
                          Licence Expiring Soon
                        </h6>
                      </div>
                    </div>
                  </Link>
                </Menu.Item>
                <Menu.Item>
                  <Link
                    to={"/not-found"}
                    className=" group px-4 py-2.5 flex items-center border-t border-gray-200"
                  >
                    <FiFileText className=" mr-2 text-red-500 " />
                    <div className="flex items-center justify-between w-38.5">
                      <div>
                        <h6 className="group-hover:text-primary-200">
                          Portfolio
                        </h6>
                      </div>
                    </div>
                  </Link>
                </Menu.Item>
              </Menu.Items>
            </Transition>
          </Menu>
        
          <DropDownHeader imageUrl={grpImg} />
        </div>
      </header>
    </>
  );
};

Header.defaultProps = {};

export default memo(Header);

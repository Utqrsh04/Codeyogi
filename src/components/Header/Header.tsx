import { FC, memo } from "react";
import { FiSearch } from "react-icons/fi";
import { MdMailOutline, MdNotificationsNone } from "react-icons/md";
import DropDownHeader from "./DropDownHeader";
import grpImg from "../../images/grpImg.jpg";
import { BsSearch } from "react-icons/bs";

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
        <div className="flex flex-row justify-around pr-10 ">
          <FiSearch className=" text-white m-2 w-8 h-8 " />
          <MdMailOutline className="text-white m-2 w-8 h-8 " />
          <DropDownHeader Icon={MdNotificationsNone} />
          <DropDownHeader imageUrl={grpImg} />
        </div>
      </header>
    </>
  );
};

Header.defaultProps = {};

export default memo(Header);

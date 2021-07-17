import { FC, memo } from "react";
import { SiCodewars } from "react-icons/si";
import { FiSearch } from "react-icons/fi";
import { MdMailOutline, MdNotificationsNone } from "react-icons/md";

interface Props {}

const Header: FC<Props> = (props) => {
  return (
    <header className="flex flex-row justify-between h-14 w-screen bg-gray-900  ">
      <SiCodewars className="text-white m-3 w-8 h-8 " />
      <div className="flex flex-row pr-5 ">
        <FiSearch className=" text-white m-2 w-8 h-8 " />
        <MdMailOutline className="text-white m-2 w-8 h-8 " />
        <MdNotificationsNone className="text-white m-2 w-8 h-8 " />
      </div>
    </header>
  );
};

Header.defaultProps = {};

export default memo(Header);

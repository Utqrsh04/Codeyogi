import { FC, memo } from "react";
import { SiCodewars } from "react-icons/si";
import { FiSearch } from "react-icons/fi";
import { MdMailOutline, MdNotificationsNone } from "react-icons/md";
import DropDownHeader from "./DropDownHeader";
import grpImg from "../../images/grpImg.jpg";

interface Props {}

const Header: FC<Props> = (props) => {
  return (
    <>
      <header className="flex flex-row justify-between h-14 bg-gray-900 w-screen ">
        <SiCodewars className="text-white m-3 w-8 h-8 " />
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

import { FC, memo } from "react";
import { SiCodewars } from "react-icons/si";
import { FiSearch } from "react-icons/fi";
import { MdMailOutline, MdNotificationsNone } from "react-icons/md";
import DropDownHeader from "./DropDownHeader";

interface Props {}

const Header: FC<Props> = (props) => {
  return (
    <>
      <header className="flex flex-row justify-between h-14 bg-gray-900  ">
        <SiCodewars className="text-white m-3 w-8 h-8 " />
        <div className="flex flex-row justify-around pr-10 ">
          <FiSearch className=" text-white m-2 w-8 h-8 " />
          <MdMailOutline className="text-white m-2 w-8 h-8 " />
          <DropDownHeader Icon={MdNotificationsNone} />
          <DropDownHeader
            imageUrl={
              "https://i2.wp.com/worldbusinessfitness.com/wp-content/uploads/2018/01/opulent-profile-square-07.jpg?ssl=1"
            }
          />
        </div>
      </header>
    </>
  );
};

Header.defaultProps = {};

export default memo(Header);

import { FC, memo } from "react";
import { Link } from "react-router-dom";
import { SiCodewars } from "react-icons/si";
import { FiSearch } from "react-icons/fi";
import { GiHamburgerMenu } from "react-icons/gi";
import { MdMailOutline, MdNotificationsNone } from "react-icons/md";
import Sidebar from '../components/Sidebar';
import Dropdown from "../components/Dropdown";

interface Props {}

const Dashboard: FC<Props> = (props) => {
  return (
    <div className="bg-gray-200 ">
      <header className="flex flex-row justify-between h-14 w-screen bg-gray-900  ">
        <SiCodewars className="text-white m-3 w-8 h-8 " />
        <div className="flex flex-row pr-5 ">
          <FiSearch className=" text-white m-2 w-8 h-8 " />
          <MdMailOutline className="text-white m-2 w-8 h-8 " />
          <MdNotificationsNone className="text-white m-2 w-8 h-8 " />
        </div>
      </header>
      <div className="bg-white text-gray-700 h-14 flex flex-row items-center">
        <GiHamburgerMenu className=" mx-5 w-6 h-6" onClick={() => {}} />
        <h2 className="pl-3 ">Dashboard / Admin</h2>
        <Link to="/recordings" className=" mx-auto text-red-600 ">
          <span className=" ">Go to Recordings</span>
        </Link>
        <div className=" w-40 h-16 mt-4 py-2">
          <Dropdown
            menuBtn="Settings"
            items={["Settings", "Mail", "Print", "Download", "Share"]}
          />
        </div>
      </div>
      <Sidebar/>
    </div>
  );
};

Dashboard.defaultProps = {};

export default memo(Dashboard);

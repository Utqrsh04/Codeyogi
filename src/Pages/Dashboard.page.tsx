import { FC, memo, useState } from "react";
import { Link } from "react-router-dom";
import { GiHamburgerMenu } from "react-icons/gi";
import Sidebar from "../components/Sidebar";
import Dropdown from "../components/Dropdown";
import Header from "../components/Header";

interface Props {}

const Dashboard: FC<Props> = (props) => {
  const [sidebarClass, setsidebarClass] = useState<boolean>(false);

  const toggleSidebar = () => {
    sidebarClass ? setsidebarClass(false) : setsidebarClass(true);
  };

  return (
    <div className=" h-screen w-screen bg-gray-100">
      <Header />

      <div className="bg-white text-gray-700 h-14 flex flex-row justify-evenly items-center">
        <button className=" mx-5 w-6 h-6" onClick={toggleSidebar}>
          <GiHamburgerMenu />
        </button>
        <h2 className="pl-2 ">Dashboard / Admin</h2>
        <Link to="/recordings" className=" text-sm mx-auto text-center text-blue-900 ">
          <span className="rounded-md bg-yellow-200 p-1">Go to Recordings</span>
        </Link>
        <div className=" px-2 w-36 h-16 mt-4 py-2">
          <Dropdown
            menuBtn="Settings"
            items={["Settings", "Mail", "Print", "Download", "Share"]}
          />
        </div>
      </div>
      <Sidebar classes={sidebarClass} />
    </div>
  );
};

Dashboard.defaultProps = {};

export default memo(Dashboard);

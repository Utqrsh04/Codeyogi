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
    <div className="h-screen text-center bg-gray-100">
      <Header />
      <div className="bg-white px-5 text-gray-700 h-14 flex flex-row justify-between items-center">
      <div className=" flex justify-around ">
          <button className=" mx-1 w-6 h-6" onClick={toggleSidebar}>
            <GiHamburgerMenu />
          </button>
          <h2 className="font-semibold">Dashboard</h2>
        </div>
        <div className="w-40 h-16 mt-4 py-2">
          <Dropdown
            menuBtn="Settings"
            items={["Settings", "Mail", "Print", "Download", "Share"]}
          />
        </div>
      </div>
      <Sidebar classes={sidebarClass} />
      <Link to="/recordings" className="bg-red-400 text-blue-900 ">
        Go to Recordings
      </Link>
    </div>
  );
};

Dashboard.defaultProps = {};

export default memo(Dashboard);

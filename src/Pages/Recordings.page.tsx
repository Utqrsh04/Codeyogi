import { FC, memo, useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { Link } from "react-router-dom";
import Dropdown from "../components/Dropdown";
import Header from "../components/Header";
import Sidebar from "../components/Sidebar";

interface Props {}

const Recordings: FC<Props> = (props) => {
  const [sidebarClass, setsidebarClass] = useState<boolean>(false);

  const toggleSidebar = () => {
    sidebarClass ? setsidebarClass(false) : setsidebarClass(true);
  };

  return (
    <div className=" h-screen w-screen bg-gray-100">
      <Header />
      <div className="bg-white text-gray-700 h-14 flex flex-row items-center">
        <button className=" mx-5 w-6 h-6" onClick={toggleSidebar}>
          <GiHamburgerMenu />
        </button>
        <h2 className="pl-3 ">Recordings</h2>
        <Link to="/dashboard" className=" mx-auto text-blue-900 ">
          <span className="rounded-lg text-sm bg-yellow-200 px-1 py-1">
            Go to Dashboard
          </span>
        </Link>
        <div className=" w-40 h-16 mt-4 py-2">
          <Dropdown
            menuBtn="Settings"
            items={["Settings", "Mail", "Print", "Download", "Share"]}
          />
        </div>
      </div>
      <Sidebar classes={sidebarClass}/>
    </div>
  );
};

Recordings.defaultProps = {};

export default memo(Recordings);

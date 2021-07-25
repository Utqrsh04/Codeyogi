import { FC, memo, useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import Dropdown from "../components/Dropdown";
import Header from "../components/Header";
import Sidebar from "../components/Sidebar/Sidebar";

interface Props {}

const Recordings: FC<Props> = (props) => {
  const [sidebarClass, setsidebarClass] = useState<boolean>(false);

  const toggleSidebar = () => {
    sidebarClass ? setsidebarClass(false) : setsidebarClass(true);
  };

  return (
    <div className=" h-screen w-screen text-center bg-gray-100">
      <Header />
      <div className="bg-white px-5 text-gray-700 h-14 flex flex-row items-center justify-between">
        <div className=" flex justify-around ">
          <button className=" mx-1 w-6 h-6" onClick={toggleSidebar}>
            <GiHamburgerMenu />
          </button>
          <h2 className="font-semibold">Recordings</h2>
        </div>
        <div className=" w-40 h-16 mt-4 py-2">
          <Dropdown
            items={["Settings", "Mail", "Print", "Download", "Share"]}
            needArrowIcon={true}
          >
            Settings
          </Dropdown>
        </div>
      </div>
      <Sidebar classes={sidebarClass} />
    </div>
  );
};

Recordings.defaultProps = {};

export default memo(Recordings);

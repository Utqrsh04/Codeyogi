import { FC, memo, useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import Sidebar from "../components/Sidebar/Sidebar";
import Dropdown from "../components/Dropdown";
import Header from "../components/Header";
import ListGroup from "../components/ListGroup";

interface Props {}

const Dashboard: FC<Props> = (props) => {
  const [sidebarClass, setsidebarClass] = useState<boolean>(false);

  const toggleSidebar = () => {
    sidebarClass ? setsidebarClass(false) : setsidebarClass(true);
  };

  return (
    <div className="h-screen text-center w-screen ">
      <Header />
      <div className="bg-white sm:px-5 px-2 text-gray-700 h-14 flex flex-row justify-between items-center">
        <div className=" flex justify-around ">
          <button className=" mx-1 w-6 h-6" onClick={toggleSidebar}>
            <GiHamburgerMenu />
          </button>
          <h2 className="font-semibold">Dashboard</h2>
        </div>
        <div className="w-40 h-16 mt-4 py-2">
          <Dropdown
            items={["Settings", "Mail", "Print", "Download", "Share"]}
            needArrowIcon={true}
          >
            Settings
          </Dropdown>
        </div>
      </div>
      <section className="bg-blue-200 w-full h-full">
        <Sidebar classes={sidebarClass} />
        <ListGroup />
      </section>
    </div>
  );
};

Dashboard.defaultProps = {};

export default memo(Dashboard);

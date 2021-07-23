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
    <div>
      <div className="text-center w-screen ">
        <Header />
        <div className="bg-white mb-2 sm:px-5 px-2 text-gray-700 h-14 flex flex-row justify-between items-center">
          <div className=" flex items-center justify-around ">
            <button className=" m-2 w-6 h-6" onClick={toggleSidebar}>
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
      </div>
      <section className="space-x-5 flex">
        <Sidebar classes={sidebarClass} />
        <ListGroup />
      </section>
    </div>
  );
};

Dashboard.defaultProps = {};

export default memo(Dashboard);

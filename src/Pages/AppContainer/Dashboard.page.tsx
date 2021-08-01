import { FC, memo, useEffect, useState } from "react";
import Sidebar from "../../components/Sidebar/Sidebar";
import Dropdown from "../../components/Dropdown";
import Header from "../../components/Header";
import ListCard from "../../components/ListCard/ListCard";
import Button from "../../components/Button/Button.";
import { GiHamburgerMenu } from "react-icons/gi";
import { FiLock } from "react-icons/fi";
import { Group } from "../../models/Group";
import { fetchGroups, Logout } from "../../api/index";
import { User } from "../../models/User";

interface Props {
  user: User;
}

const Dashboard: FC<Props> = ({ user }) => {
  const [userData, setuserData] = useState<Group[] | void>([]);
  const [search, setSearch] = useState("");

  const [sidebarClass, setsidebarClass] = useState<boolean>(false);

  const toggleSidebar = () => {
    sidebarClass ? setsidebarClass(false) : setsidebarClass(true);
  };

  useEffect(() => {
    fetchGroups({ status: "all-groups", query: search }).then((data) => {
      console.log("Dashboard ", data);
      setuserData(data);
    });
  }, [search]);

  const handleChange = (e: any) => {
    setSearch(e.target.value);
  };

  return (
    <div className=" w-screen ">
      <div className="text-center ">
        <Header />
        <div className="bg-white mb-2 sm:px-5 sm:pr-10 pr-2 text-gray-700 h-14 flex flex-row justify-between items-center">
          <div className=" flex items-center space-x-1 justify-evenly ">
            <button className=" m-2 w-6 h-6" onClick={toggleSidebar}>
              <GiHamburgerMenu />
            </button>
            <h2 className="font-semibold">Dashboard</h2>
          </div>
          <div className=" sm:space-x-2 flex rounded-lg items-center">
            <input
              onChange={handleChange}
              placeholder="Search"
              className=" rounded-lg w-32 h-8 p-5 "
            />
            <Button
              Icon={FiLock}
              onClick={() => {
                Logout();
                window.location.href = "/login";
              }}
            >
              Log Out
            </Button>
          </div>

          <div className="w-40 sm:block hidden h-16 mt-4 py-2">
            <Dropdown
              items={["Settings", "Mail", "Print", "Download", "Share"]}
              needArrowIcon={true}
            >
              Settings
            </Dropdown>
          </div>
        </div>
      </div>
      <div className=" text-left mx-5 text-xl my-2 ">
        <span className=" bg-blue-200 text-black p-2 rounded-xl font-semibold ">
          Welcome {`${user.first_name} ${user.last_name}`}
        </span>
      </div>
      <section className="space-x-5 flex">
        <Sidebar classes={sidebarClass} />
        { userData && <ListCard data={userData} />}
      </section>
    </div>
  );
};

Dashboard.defaultProps = {};

export default memo(Dashboard);

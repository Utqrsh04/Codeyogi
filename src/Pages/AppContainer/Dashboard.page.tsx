import { FC, memo, useEffect, useState } from "react";
import Sidebar from "../../components/Sidebar/Sidebar";
import Header from "../../components/Header";
import ListCard from "../../components/ListCard/ListCard";
import { GiHamburgerMenu } from "react-icons/gi";
import { fetchGroups } from "../../api/index";
import { meFetchGroups, meToggleSidebar, useAppSelector } from "../../store";
import { useDispatch } from "react-redux";

interface Props {}

const Dashboard: FC<Props> = () => {
  const [search, setSearch] = useState("");

  const dispatch = useDispatch();
  const Groups = useAppSelector((state) => state.groups);
  const user = useAppSelector((state) => state.me);
  const sidebar = useAppSelector((state) => state.isSidebarOpen);

  const toggleSidebar = () => {
    sidebar
      ? dispatch(meToggleSidebar(false))
      : dispatch(meToggleSidebar(true));
  };

  useEffect(() => {
    fetchGroups({ status: "all-groups", query: search }).then((data) => {
      console.log("Dashboard Component Groups ", data);
      data && dispatch(meFetchGroups(data));
    });
  }, [search]); //eslint-disable-line react-hooks/exhaustive-deps

  const handleChange = (e: any) => {
    setSearch(e.target.value);
  };

  return (
    <div className=" w-screen ">
      <div className="text-center ">
        <Header />
        <div className="bg-white mb-2 sm:px-4 sm:pr-8 pr-2 text-gray-700 h-14 flex flex-row items-center">
          <div className=" flex items-center space-x-1 justify-evenly ">
            <button className=" m-2 w-6 h-6" onClick={toggleSidebar}>
              <GiHamburgerMenu />
            </button>
            <h2 className="font-semibold">Dashboard</h2>
          </div>
          <div className=" mx-4 flex my-2 text-center ">
            <span className="  sm:block bg-blue-200 px-1 text-black my-auto rounded-sm font-semibold ">
              Welcome {`${user!.first_name} ${user!.last_name}`}
            </span>
            <div className="mx-1 flex rounded-lg items-center">
              <input
                onChange={handleChange}
                placeholder="Search"
                className=" rounded-lg w-32 h-5 p-4 "
              />
            </div>
          </div>
        </div>
      </div>

      <section className="space-x-5 flex">
        <Sidebar classes={sidebar} />
        {Groups && <ListCard data={Groups} />}
      </section>
    </div>
  );
};

Dashboard.defaultProps = {};

export default memo(Dashboard);

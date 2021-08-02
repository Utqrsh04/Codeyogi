import { FC, memo, useEffect } from "react";
import Sidebar from "../../components/Sidebar/Sidebar";
import Header from "../../components/Header";
import ListCard from "../../components/ListCard/ListCard";
import { GiHamburgerMenu } from "react-icons/gi";
import { fetchGroups } from "../../api/index";
import { meGroupQuery, uiToggleSidebar, useAppSelector } from "../../store";
import { useDispatch } from "react-redux";

interface Props {}

const Dashboard: FC<Props> = () => {
  const searchQuery = useAppSelector((state) => state.groupQuery);

  const dispatch = useDispatch();

  const groups = useAppSelector((state) => {
    const groupsIds = state.groupqueryMap[state.groupQuery] || [];
    const groups = groupsIds.map((id) => state.groups[id]);
    return groups;
  });

  const first_name = useAppSelector((state) => state.me!.first_name);
  const sidebar = useAppSelector((state) => state.isSidebarOpen);

  const toggleSidebar = () => {
    sidebar
      ? dispatch(uiToggleSidebar(false))
      : dispatch(uiToggleSidebar(true));
  };

  useEffect(() => {
    fetchGroups({ status: "all-groups", query: searchQuery }).then((groups) => {
      // console.log("Dashboard Component groups ", groups);
      groups &&
        dispatch({
          type: "groups/query_completed",
          payload: { groups: groups, searchQuery },
        });
    });
  }, [searchQuery]); //eslint-disable-line react-hooks/exhaustive-deps

  const handleChange = (e: any) => {
    dispatch(meGroupQuery(e.target.value));
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
              Welcome {`${first_name}`}
            </span>
            <div className="mx-1 flex rounded-lg items-center">
              <input
                onChange={handleChange}
                value={searchQuery}
                type="text"
                placeholder="Search"
                className=" rounded-lg w-32 h-5 p-4 "
              />
            </div>
          </div>
        </div>
      </div>

      <section className="space-x-5 flex">
        <Sidebar classes={sidebar} />
        {groups && <ListCard data={groups} />}
      </section>
    </div>
  );
};

Dashboard.defaultProps = {};

export default memo(Dashboard);

import { FC, memo, useEffect } from "react";
import Sidebar from "../../components/Sidebar/Sidebar";
import Header from "../../components/Header";
import ListCard from "../../components/ListCard/ListCard";
import { GiHamburgerMenu } from "react-icons/gi";
import { fetchGroups } from "../../api/index";
import { useAppSelector } from "../../store";
import { groupActions } from "../../actions/groups.actions";
import { sidebarActions } from "../../actions/sidebar.actions";

interface Props {}

const Dashboard: FC<Props> = () => {
  const query = useAppSelector((state) => state.groups.query);

  const first_name = useAppSelector(
    (state) => state.user.byId[state.auth.id!].first_name
  );
  const sidebar = useAppSelector((state) => state.sidebar.isOpen);

  const groups = useAppSelector((state) => {
    const groupsIds = state.groups.queryMap[state.groups.query] || [];
    const groups = groupsIds.map((id) => state.groups.byId[id]);
    return groups;
  });

  useEffect(() => {
    fetchGroups({ status: "all-groups", query: query }).then((groups) => {
      // console.log("Dashboard Component groups ", groups);
      groups && groupActions.queryCompleted(query, groups);
    });
  }, [query]); //eslint-disable-line react-hooks/exhaustive-deps

  return (
    <div className=" w-screen ">
      <div className="text-center w-full fixed z-40">
        <Header />
        <div className="bg-white mb-2 sm:px-4 sm:pr-8 pr-2 text-gray-700 h-14 flex flex-row items-center">
          <div className=" flex items-center space-x-1 justify-evenly ">
            <button
              className=" m-2 w-6 h-6"
              onClick={() =>
                sidebar
                  ? sidebarActions.sidebar(false)
                  : sidebarActions.sidebar(true)
              }
            >
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
                onChange={(e: any) => groupActions.query(e.target.value)}
                value={query}
                type="text"
                placeholder="Search"
                className=" rounded-lg w-32 h-5 p-4 "
              />
            </div>
          </div>
        </div>
      </div>

      <section className="space-x-5 flex relative top-28">
        <Sidebar classes={sidebar} />
        {groups && <ListCard data={groups} />}
      </section>
    </div>
  );
};

Dashboard.defaultProps = {};

export default memo(Dashboard);

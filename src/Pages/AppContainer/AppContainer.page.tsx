import { FC, memo } from "react";
import { Switch, Route, useParams } from "react-router-dom";
import Sidebar from "../../components/Sidebar/Sidebar";
import DashboardPage from "./Dashboard.page";
import GroupsPage from "./Groups.page";
import LecturePage from "./Lecture.page";
import ProfiePage from "./Profie.page";
import GroupDetails from "./GroupDetails.page";
import RecordingsPage from "./Recordings.page";
import UsersPage from "./Users.page";
import UserDetails from "./UserDetails.page";
import Header from "../../components/Header/Header";
import { useAppSelector } from "../../store";
import { meSelector } from "../../selectors/auth.selectors";
import { sidebarActions } from "../../actions/sidebar.actions";
import { GiHamburgerMenu } from "react-icons/gi";

interface Props {}

const AppContainer: FC<Props> = () => {
  const user = useAppSelector(meSelector);
  const sidebar = useAppSelector((state) => state.sidebar.isOpen);

  return (
    <>
      <div className="text-center w-full z-40 sticky top-0">
        <Header />
        <div className="bg-white sm:px-4 sm:pr-8 pr-2 text-gray-700 h-14 flex flex-row items-center z-50">
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
            {/* <h2 className="font-semibold">Dashboard</h2> */}
          </div>
          <div className=" mx-4 flex my-2 text-center ">
            <span className="  sm:block bg-gray-100 px-1 text-black my-auto rounded-sm font-semibold ">
              Welcome {`${user!.first_name} ${user!.last_name}`}
            </span>
          </div>
        </div>
      </div>
      <Sidebar />

      <Switch>
        <Route path="/dashboard">
          <DashboardPage />
        </Route>

        <Route exact path="/groups">
          <GroupsPage />
        </Route>

        <Route path="/recordings">
          <RecordingsPage />
        </Route>

        <Route path="/profile">
          <ProfiePage />
        </Route>

        <Route exact path="/groups/:groupId">
          <GroupDetails />
        </Route>

        <Route exact path="/users">
          <UsersPage />
        </Route>

        <Route exact path="/users/:userId">
          <UserDetails />
        </Route>

        <Route path="/batch/:batchNumber/lecture/:lectureNumber">
          <LecturePage />
        </Route>
      </Switch>
    </>
  );
};

AppContainer.defaultProps = {};

export default memo(AppContainer);

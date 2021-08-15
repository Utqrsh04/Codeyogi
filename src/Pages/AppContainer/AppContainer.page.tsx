import { FC, memo } from "react";
import { Switch, Route } from "react-router-dom";
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

interface Props {}

const AppContainer: FC<Props> = () => {
  return (
    <>
      <Header />
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

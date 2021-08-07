import { FC, memo } from "react";
import { Switch, Route } from "react-router-dom";
import Group from "../../components/Group";
import DashboardPage from "./Dashboard.page";
import GroupsPage from "./Groups.page";
import LecturePage from "./Lecture.page";
import ProfiePage from "./Profie.page";
import RecordingsPage from "./Recordings.page";

interface Props {}

const AppContainer: FC<Props> = () => {
  return (
    <div className=" flex flex-row  ">
      <Switch>
        <Route path="/dashboard">
          <DashboardPage />
        </Route>

        <Route path="/groups">
          <GroupsPage />
        </Route>

        <Route path="/recordings">
          <RecordingsPage />
        </Route>

        <Route path="/profile">
          <ProfiePage />
        </Route>

        <Route path="/groupdata/:id">
          <Group/>
        </Route>

        <Route path="/batch/:batchNumber/lecture/:lectureNumber">
          <LecturePage />
        </Route>
      </Switch>
    </div>
  );
};

AppContainer.defaultProps = {};

export default memo(AppContainer);

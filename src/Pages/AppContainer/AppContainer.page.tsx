import { FC , memo } from 'react';
import {Switch , Route } from 'react-router-dom'
import DashboardPage from './Dashboard.page';
import LecturePage from './Lecture.page';
import ProfiePage from './Profie.page';
import RecordingsPage from './Recordings.page';

interface Props{
};

const AppContainer : FC<Props> = () => {
  return (
    <div className=" flex flex-row  ">
    <Switch>
    <Route path="/dashboard" >
      <DashboardPage />
    </Route>
    
    <Route path="/recordings" >
      <RecordingsPage/>
    </Route>

    <Route path="/profile" >
      <ProfiePage/>
    </Route>

    <Route path="/batch/:batchNumber/lecture/:lectureNumber" >
      <LecturePage/>
    </Route>
    </Switch>
  </div>
  );
}

AppContainer.defaultProps = {} ;

export default memo(AppContainer);
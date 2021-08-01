import { FC , memo } from 'react';
import {Switch , Route } from 'react-router-dom'
import { User } from '../../models/User';
import DashboardPage from './Dashboard.page';
import LecturePage from './Lecture.page';
import ProfiePage from './Profie.page';
import RecordingsPage from './Recordings.page';

interface Props{
  user : User;
};

const AppContainer : FC<Props> = (props) => {
  return (
    <div className=" flex flex-row  ">
    <Switch>
    <Route path="/dashboard" >
      <DashboardPage user={props.user}/>
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
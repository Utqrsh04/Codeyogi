import { FC , memo } from 'react';
import {Switch , Route } from 'react-router-dom'
import AuthHero from '../../components/AuthHero';
import LoginPage from './Login.page';
import SignupPage from './Signup.page';

interface Props{
  // onLogin : (user : User) => void ;

};

const Auth : FC<Props> = (props) => {
  return (
    <div className="flex flex-row">
      <Switch>
      <Route path="/login" >
        <LoginPage onLogin={ (u) => {
          console.log(" User Object in Auth Page : ",u)
          // props.onLogin(u)
        } }/>
      </Route>
      
      <Route path="/signup" >
        <SignupPage/>
      </Route>
      </Switch>
      <AuthHero />
    </div>
  );
}

Auth.defaultProps = {} ;

export default memo(Auth);
import { FC, lazy, Suspense, useEffect, useState } from "react";
import { BrowserRouter, Redirect, Route, Switch } from "react-router-dom";
import { me } from "./api";
import { LS_AUTH_TOKEN } from "./api/base";
import { User } from "./models/User";
import AppContainerPageLazy from "./Pages/AppContainer/AppContainer.lazy";
import NotFoundPage from "./Pages/NotFound.page";

const AuthPagelazy = lazy(() => import("./Pages/Auth/Auth.page"));

interface Props {

}

const App: FC<Props> = () => {

  const [user, setUser] = useState<User>()

  const token = localStorage.getItem(LS_AUTH_TOKEN);

  useEffect(() => {
    if(!token)
      return; 
    me().then( (u) => setUser(u)) 
  }, []) //eslint-disable-line react-hooks/exhaustive-deps

  
  
  if(!user && token )
    return <div> loading...</div>;

  return (
    <Suspense
      fallback={
        <div className=" text-red-600 text-lg font-semibold text-center">
          Loading ....
        </div>
      }
    >
      <BrowserRouter>
        <Switch>
          <Route path="/" exact>
            {user ? <Redirect to="/dashboard" /> : <Redirect to="/login" />}
          </Route>

          <Route path={["/login", "/signup"]} exact>
            {user ? <Redirect to="/dashboard" /> : <AuthPagelazy onLogin={setUser}/>}
          </Route>

          <Route
            path={[
              "/dashboard",
              "/recordings",
              "/profile",
              "/batch/:batchNumber/lecture/:lectureNumber",
            ]}
            exact
          >
            {token ? <AppContainerPageLazy user={user!} /> : <Redirect to="/login" />}
          </Route>

          <Route path="/not-found" exact>
            <NotFoundPage />
          </Route>

          <Route>
            <Redirect to="/not-found"></Redirect>
          </Route>
        </Switch>
      </BrowserRouter>
    </Suspense>
  );
};

export default App;

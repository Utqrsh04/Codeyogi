import React from "react";
import { BrowserRouter, Redirect, Route, Switch } from "react-router-dom";
import { LS_LOGIN_TOKEN } from "./api";
import AppContainerPage from "./Pages/AppContainer.page";
import AuthPage from "./Pages/Auth.page";
import NotFoundPage from "./Pages/NotFound.page";

function App() {

  const token = localStorage.getItem(LS_LOGIN_TOKEN)

  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact>
          { token ? <Redirect to="/dashboard"/> : <Redirect to="/login"/> }
        </Route>

        <Route path={["/login", "/signup"]} exact>
          <AuthPage />
        </Route>

        <Route
          path={[
            "/dashboard",
            "/recordings",
            "/batch/:batchNumber/lecture/:lectureNumber",
          ]}
          exact
        >
          <AppContainerPage />
        </Route>
        <Route path="/not-found">
          <NotFoundPage />
        </Route>
        <Route>
          <Redirect to="/not-found"></Redirect>
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;

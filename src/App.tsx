import { FC, lazy, Suspense } from "react";
import { BrowserRouter, Redirect, Route, Switch } from "react-router-dom";
import { LS_AUTH_TOKEN } from "./api/base";
import AppContainerPageLazy from "./Pages/AppContainer/AppContainer.lazy";
import NotFoundPage from "./Pages/NotFound.page";

const AuthPagelazy = lazy(() => import("./Pages/Auth/Auth.page"));

interface Props {}

const App: FC<Props> = () => {
  const token = localStorage.getItem(LS_AUTH_TOKEN);

  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact>
          {token ? <Redirect to="/dashboard" /> : <Redirect to="/login" />}
        </Route>

        <Route path={["/login", "/signup"]} exact>
          {token ? (
            <Redirect to="/dashboard"/>
          ) : (
            <Suspense
              fallback={
                <div className="text-red-500 p-2 ">
                  Loading Login Page
                </div>
              }
            >
              <AuthPagelazy />
            </Suspense>
          )}
        </Route>

        <Route
          path={[
            "/dashboard",
            "/recordings",
            "/batch/:batchNumber/lecture/:lectureNumber",
          ]}
          exact
        >
          <Suspense
            fallback={
              <div className=" text-red-500 text-center align-middle w-screen h-screen ">
                Loading App Container Page
              </div>
            }
          >
            <AppContainerPageLazy />
          </Suspense>
        </Route>

        <Route path="/not-found" exact>
          <NotFoundPage />
        </Route>

        <Route>
          <Redirect to="/not-found"></Redirect>
        </Route>
      </Switch>
    </BrowserRouter>
  );
};

export default App;

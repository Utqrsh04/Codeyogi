import { FC, lazy, Suspense, useEffect } from "react";
import { Redirect, Route, Switch } from "react-router-dom";
import AppContainerPageLazy from "./Pages/AppContainer/AppContainer.lazy";
import NotFoundPage from "./Pages/NotFound.page";
// import Loading from "./components/Loading";
import { history, useAppSelector } from "./store";
import { LS_AUTH_TOKEN } from "./api/base";
// import { me } from "./middlewares/auth.middleware";
import { ConnectedRouter } from "connected-react-router";
import { meTryFetch } from "./actions/auth.actions";
import { useDispatch } from "react-redux";
import { loggedInUserSelector } from "./selectors/user.selectors";
import Loader from "./components/Loader/Loader";

const AuthPagelazy = lazy(() => import("./Pages/Auth/Auth.page"));

interface Props {}

const App: FC<Props> = () => {
  const dispatch = useDispatch();
  const token = localStorage.getItem(LS_AUTH_TOKEN);

  useEffect(() => {
    if (!token) return;

    dispatch(meTryFetch());
  }, []); //eslint-disable-line react-hooks/exhaustive-deps

  const user = useAppSelector(loggedInUserSelector);

  // console.log("App Component User ", user);
  // if (!user && token) return <Loading />;
  if (!user && token) return <Loader />;


  return (
    <Suspense fallback={<Loader />}>
      <ConnectedRouter history={history}>
        <Switch>
          <Route path="/" exact>
            {user ? <Redirect to="/dashboard" /> : <Redirect to="/login" />}
          </Route>

          <Route path={["/login", "/signup"]} exact>
            {user ? <Redirect to="/dashboard" /> : <AuthPagelazy />}
          </Route>

          <Route
            path={[
              "/dashboard",
              "/recordings",
              "/groups",
              "/groups/:id",
              "/profile",
              "/users",
              "/users/:userId",
              "/batch/:batchNumber/lecture/:lectureNumber",
            ]}
            exact
          >
            {token ? <AppContainerPageLazy /> : <Redirect to="/login" />}
          </Route>

          <Route path="/not-found" exact>
            <NotFoundPage />
          </Route>

          <Route>
            <Redirect to="/not-found"></Redirect>
          </Route>
        </Switch>
      </ConnectedRouter>
    </Suspense>
  );
};

export default App;

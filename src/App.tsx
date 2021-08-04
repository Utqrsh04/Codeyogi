import { FC, lazy, Suspense, useEffect } from "react";
import { useDispatch } from "react-redux";
import { BrowserRouter, Redirect, Route, Switch } from "react-router-dom";
import { meFetchedAction } from "./actions/auth.actions";
import { me } from "./api";
import { LS_AUTH_TOKEN } from "./api/base";
import Loading from "./components/Loading";
import AppContainerPageLazy from "./Pages/AppContainer/AppContainer.lazy";
import NotFoundPage from "./Pages/AppContainer/NotFound.page";
import { useAppSelector } from "./store";

const AuthPagelazy = lazy(() => import("./Pages/Auth/Auth.page"));

interface Props {}

const App: FC<Props> = () => {
  const user = useAppSelector(
    (state) => state.auth.id && state.user.byId[state.auth.id]
  );

  console.log("App Component User ", user);
  const dispatch = useDispatch();

  const token = localStorage.getItem(LS_AUTH_TOKEN);

  useEffect(() => {
    if (!token) return;
    me().then((u) => dispatch(meFetchedAction(u)));
  }, []); //eslint-disable-line react-hooks/exhaustive-deps

  if (!user && token) return <Loading />;

  return (
    <Suspense fallback={<Loading />}>
      <BrowserRouter>
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
              "/profile",
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
      </BrowserRouter>
    </Suspense>
  );
};

export default App;

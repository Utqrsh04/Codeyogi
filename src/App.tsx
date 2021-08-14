import { FC, lazy, Suspense, useEffect } from "react";
import { BrowserRouter, Redirect, Route, Switch } from "react-router-dom";
import AppContainerPageLazy from "./Pages/AppContainer/AppContainer.lazy";
import NotFoundPage from "./Pages/NotFound.page";
import Loading from "./components/Loading";
import { useAppSelector } from "./store";
import { LS_AUTH_TOKEN } from "./api/base";
import { meSelector } from "./selectors/auth.selectors";
// import { me } from "./middlewares/auth.middleware";
import { me } from "./api/auth";
import { authActions } from "./actions/auth.actions";

const AuthPagelazy = lazy(() => import("./Pages/Auth/Auth.page"));

interface Props {}

const App: FC<Props> = () => {
  // const dispatch = useDispatch();

  const token = localStorage.getItem(LS_AUTH_TOKEN);

  useEffect(() => {
    if (!token) return;

    me().then((u) => authActions.fetch(u));
  }, []); //eslint-disable-line react-hooks/exhaustive-deps

  const user = useAppSelector(meSelector);

  // console.log("App Component User ", user);
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
      </BrowserRouter>
    </Suspense>
  );
};

export default App;

import { BrowserRouter, Switch, Route } from "react-router-dom";
import { HomeView } from "../view/HomeView";
import { LoginView } from "../view/LoginView";
import { useEffect, useContext } from "react";
import { UserContext } from "./../shared/provider/UserProvider";
import RoutingPath from "./RoutingPaths";
export const Routes = (props: { children: React.ReactChild }) => {
  const [authUser, setAuthUser] = useContext(UserContext);
  const { children } = props;

  useEffect(() => {
    setAuthUser({ userName: localStorage.getItem("user") });
  }, []);

  return (
    <BrowserRouter>
      {children}
      <Switch>
        <Route exact path={RoutingPath.homePath} component={HomeView} />
        <Route exact path={RoutingPath.loginPath} component={LoginView} />
        <Route component={HomeView} />
        // startsidan
      </Switch>
    </BrowserRouter>
  );
};

import { reduceEachTrailingCommentRange } from "typescript";

import { BrowserRouter, Switch, Route } from "react-router-dom";
import { HomeView } from "../view/HomeView";
import { AboutView } from "../view/AboutView";
import { LoginView } from "../view/LoginView";
import { ContactView } from "../view/ContactView";
import RoutingPath from "./RoutingPaths";

export const Routes = (props: { children: React.ReactChild }) => {
  const { children } = props;
  return (
    <BrowserRouter>
      {children}
      <Switch>
        <Route exact path={RoutingPath.homePath} component={HomeView} />
        <Route exact path={RoutingPath.aboutPath} component={AboutView} />
        <Route exact path={RoutingPath.loginPath} component={LoginView} />
        <Route exact path={RoutingPath.contactPath} component={ContactView} />
        <Route component={HomeView} />
        // startsidan
      </Switch>
    </BrowserRouter>
  );
};

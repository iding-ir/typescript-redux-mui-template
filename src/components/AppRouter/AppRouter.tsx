import React from "react";
import { useDispatch } from "react-redux";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  RouteComponentProps,
} from "react-router-dom";

import { routes, IRoutes, IRoute, IRouteGroup } from "./routes";
import { setPage } from "../../actions/page";
import * as URLS from "../../constants/urls";

interface IPropsAppRouter {
  children: JSX.Element;
}

const AppRouter = (props: IPropsAppRouter) => {
  const dispatch = useDispatch();

  const searchRoutes = (routes: IRoutes, url: string) => {
    let result: any = false;

    routes.forEach((route: IRoute | IRouteGroup) => {
      if (route.url === url) {
        result = route;
      }

      if ("items" in route && !result) {
        result = searchRoutes(route.items, url);
      }
    });

    return result;
  };

  const pageRouteRenderer = ({ match }: RouteComponentProps) => {
    const { url } = match;
    const route = searchRoutes(routes, url) || routes[0];

    dispatch(setPage(route));

    return null;
  };

  const renderRoutes = () => {
    return Object.values(URLS).map((url: string) => (
      <Route key={url} exact path={url} render={pageRouteRenderer} />
    ));
  };

  return (
    <Router>
      <Switch>{renderRoutes()}</Switch>

      {props.children}
    </Router>
  );
};

export default AppRouter;

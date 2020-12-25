import React from "react";
import { Switch, Route } from "react-router-dom";
import { routes } from "../tree";

const View = React.memo((props) => {
  return (
    <Switch>
      {Object.keys(routes).map((key) => {
        const { page: Page, ...route } = routes[key];
        return <Route key={route.path} {...route} render={} />;
      })}
    </Switch>
  );
});

export { View };

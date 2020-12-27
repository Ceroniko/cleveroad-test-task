import React, { useContext } from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import { routes } from "../tree";
import { LayoutBase } from "../../layouts";
import { AuthContext } from "../../components";
import { PageError } from "../../pages";

const View = React.memo((props) => {
  const { currentUser } = useContext(AuthContext);
  return (
    <Switch>
      {Object.keys(routes).map((key) => {
        const { page: Page, ...route } = routes[key];
        return (
          <Route
            key={route.path}
            {...route}
            render={(matchProps) => (
              <LayoutBase>
                {!!currentUser || !route.private ? (
                  <Page {...matchProps} />
                ) : (
                  <Redirect to="/" />
                )}
              </LayoutBase>
            )}
          />
        );
      })}
      <Route
        path="*"
        render={() => (
          <LayoutBase>
            <PageError />
          </LayoutBase>
        )}
      />
    </Switch>
  );
});

export { View };

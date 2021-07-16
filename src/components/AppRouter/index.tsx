import React from 'react';
import {Switch, Route} from 'react-router-dom';
import {Layout} from 'layouts';

interface RouteDefinition {
  key: string;
  display: string;
  path: string;
  exact?: boolean;
  layout: Layout;
  children?: RouteDefinition[];
}

export const RouteContext = React.createContext<RouteDefinition[]>([]);
export const AppRouter: React.FunctionComponent<Record<string, unknown>> =
  () => {
    const routes = React.useContext(RouteContext);
    const sectionRoutes: {[key: string]: JSX.Element[]} = {};

    routes.forEach((route) => {
      Reflect.ownKeys(route.layout.sections).forEach((sectionKey) => {
        sectionKey = String(sectionKey);
        const sectionJSX = route.layout.sections[sectionKey];
        const layoutKey = `${route.layout.key}-${sectionKey}`;

        if (sectionJSX !== null) {
          if (!sectionRoutes[layoutKey]) {
            sectionRoutes[layoutKey] = [];
          }

          sectionRoutes[layoutKey].push(
            <Route
              key={`${route.key}-${sectionKey}`}
              path={route.path}
              exact={route.exact}
            >
              {sectionJSX}
            </Route>,
          );
        }
      });
    });

    return (
      <>
        {Reflect.ownKeys(sectionRoutes).map((key) => {
          const sectionKey = String(key);
          const switchKey = `switch-${sectionKey}`;

          return <Switch key={switchKey}>{sectionRoutes[sectionKey]}</Switch>;
        })}
      </>
    );
  };

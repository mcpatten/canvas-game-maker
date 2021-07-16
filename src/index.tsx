import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter} from 'react-router-dom';

import {AppRouter, RouteContext} from 'components';
import {routes} from 'routes';
import 'styles/variables.css';

ReactDOM.render(
  <BrowserRouter basename="/game-maker">
    <RouteContext.Provider value={routes}>
      <AppRouter />
    </RouteContext.Provider>
  </BrowserRouter>,
  document.getElementById('App'),
);

import React from 'react';
import {useLayout, standardLayout} from 'layouts';

import {Main} from './Main';

export const homeRoute = {
  key: 'home',
  display: 'Home',
  path: '/',
  exact: true,
  layout: useLayout(standardLayout, {main: <Main />}),
};

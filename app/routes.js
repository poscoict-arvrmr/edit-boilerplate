/* eslint flowtype-errors/show-errors: 0 */
import React from 'react';
import { Switch, Route } from 'react-router';
import App from './containers/App';
import HomePage from './containers/HomePage';
//import CounterPage from './containers/CounterPage';
import MenuPage from './containers/MenuPage';
import FilesPage from './containers/FilesPage';
import CameraPage from './containers/CameraPage';
import SettingsPage from './containers/SettingsPage';
import SignupPage from './containers/SignupPage';


export default () => (
  <App>
    <Switch>
      <Route path="/menu" component={MenuPage} />
      <Route path="/myfiles" component={FilesPage} />
      <Route path="/mycamera" component={CameraPage} />
      <Route path="/settings" component={SettingsPage} />
      <Route path="/signup" component={SignupPage} />
      <Route exact path="/" component={HomePage} />
    </Switch>
  </App>
);

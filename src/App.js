import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import { ThemeProvider } from '@material-ui/core/styles';
import theme from './Theme.js';

import InitialView from './components/Login/InitialView';
import Dashboard from './components/Dashboard/Dashboard';
import Login from './components/Login/Login';

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <Router>
          <Switch>
            <Route path="/first-view" render={() => <InitialView />} />
            <Route path="/Dashboard" render={() => <Dashboard />} />
            <Route path="/login" render={() => <Login />} />
          </Switch>
      </Router>
    </ThemeProvider>
  );
}
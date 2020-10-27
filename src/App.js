import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import { ThemeProvider } from '@material-ui/core/styles';
import theme from './Theme.js';

import FirstView from './components/Login/FirstVIew';
import Dashboard from './components/Dashboard/Dashboard';

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <Router>
        <div>
          <nav>
            <ul>
              <li>
                <Link to="/first-view">Home</Link>
              </li>
              <li>
                <Link to="/Dashboard">Dashboard</Link>
              </li>
            </ul>
          </nav>

          <Switch>
            <Route path="/first-view">
              <FirstView />
            </Route>
            <Route path="/Dashboard">
              <Dashboard />
            </Route>
          </Switch>
        </div>
      </Router>
    </ThemeProvider>
  );
}
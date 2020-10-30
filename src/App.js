import React, { useState } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

import { ThemeProvider } from '@material-ui/core/styles';
import theme from './Theme.js';

import InitialView from './components/Login/InitialView';
import Dashboard from './components/Dashboard/Dashboard';
import Login from './components/Login/Login';
import Collection from './components/Collection/Collection';

export default function App() {

  const [searchWord, setSearchWord] = useState('');

  return (
    <ThemeProvider theme={theme}>
      <Router>
        <Switch>
          <Route exact path="/" render={() => <InitialView />} />
          <Route path="/Dashboard" render={() => <Dashboard searchWord={searchWord} setSearchWord={setSearchWord} />} />
          <Route path="/login" render={() => <Login />} />
          <Route path="/collection" render={() => <Collection />} />

        </Switch>
      </Router>
    </ThemeProvider>
  );
}
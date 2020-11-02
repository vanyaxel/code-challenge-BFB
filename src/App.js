import React, { useState } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

import { ThemeProvider } from '@material-ui/core/styles';
import theme from './Theme.js';

import InitialView from './components/InitialView/InitialView';
import Dashboard from './components/Dashboard/Dashboard';
import Collection from './components/Collection/Collection';

export default function App() {

  const [artist, setArtist] = useState('');
  const [album, setAlbum] = useState('');


  return (
    <ThemeProvider theme={theme}>
      <Router>
        <Switch>
          <Route exact path="/" render={() => <InitialView />} />
          <Route path="/Dashboard" render={() => <Dashboard artist={artist} setArtist={setArtist} album={album} setAlbum={setAlbum} />} />
          <Route path="/collection" render={() => <Collection />} />

        </Switch>
      </Router>
    </ThemeProvider>
  );
}
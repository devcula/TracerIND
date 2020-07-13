import React from 'react';

import { Grid } from '@material-ui/core';
import {
  BrowserRouter as Router,
  Route,
} from 'react-router-dom'

import Header from './components/Header/Header';
import Home from './components/Home/Home';
import MainForm from './components/MainForm/MainForm';
import Dashboard from './components/Dashboard/Dashboard';

import './App.css';

function App() {
  return (
    <Grid container alignItems="center" justify="center">
      <Router>
        <Header />
        <Route exact path="/" component={Home} />
        <Route path="/new" component={MainForm} />
        <Route path="/dashboard" component={Dashboard} />
      </Router>
    </Grid>
  );
}

export default App;

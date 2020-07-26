import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './components/Home/Home';
import About from './components/About/About';
import Dashboard from './components/Dashboard/Dashboard';
import Header from './components/Header/Header';
import MainForm from './components/MainForm/MainForm';
import Directory from './components/Directory/Directory';
import Error404 from './components/Error404/Error404';

class App extends Component {
  render() {
    return (
      <Router>
        <div>
        <Header />
          <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/about" component={About} />
          <Route exact path="/dashboard" component={Dashboard} />
          <Route exact path="/add" component={MainForm} />
          <Route exact path="/directory" component={Directory} />
          <Route component={Error404} />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;

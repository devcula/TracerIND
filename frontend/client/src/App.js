import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Home from './components/Home/Home';
import About from './components/About/About';
import Dashboard from './components/Dashboard/Dashboard';
import Header from './components/Header/Header';
import MainForm from './components/MainForm/MainForm';

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Header />
          <Route exact path="/" component={Home} />
          <Route path="/about" component={About} />
          <Route path="/dashboard" component={Dashboard} />
          <Route path="/add" component={MainForm} />
        </div>
      </Router>
    );
  }
}

export default App;

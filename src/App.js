import React, { Component } from 'react';
import './App.css';
import { Route, Switch, Router } from 'react-router-dom';
import Home from './components/Home/Home';
import About from './components/About/About';
import Dashboard from './components/Dashboard/Dashboard';
import MainForm from './components/MainForm/MainForm';
import Directory from './components/Directory/Directory';
import Error404 from './components/Error404/Error404';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';
import Login from './components/Login/Login';
import { history } from './helpers';
import { authenticationService } from './services';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentUser: null
    }
  }

  componentDidMount() {
    // console.log("Inside component did mount");
    authenticationService.currentUser.subscribe(x => this.setState({ currentUser: x }, this.refreshAuth));
  }

  refreshAuth = () => {
    let { currentUser } = this.state;
    if (currentUser) {
      let msecDifference = new Date().getTime() - new Date(this.state.currentUser.timestamp).getTime();
      if (msecDifference / (1000 * 60 * 60) > 3) {
        authenticationService.refresh();
      }
    }
  }

  logout() {
    authenticationService.logout();
    history.push('/login');
  }

  render() {
    return (
      <Router history={history}>
        <div>
          <Switch>
            <Route exact path="/login" component={Login} />
            <PrivateRoute exact path="/" component={Home} />
            <PrivateRoute exact path="/about" component={About} />
            <PrivateRoute exact path="/dashboard" component={Dashboard} />
            <PrivateRoute exact path="/add" component={MainForm} />
            <PrivateRoute exact path="/directory" component={Directory} />
            <Route component={Error404} />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;

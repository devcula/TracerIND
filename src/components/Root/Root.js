import React from 'react';

import { Router, Route, Switch } from 'react-router-dom';

import { authenticationService } from '../../services';
import { history } from '../../helpers';

import App from '../../App';
import PrivateRoute from '../PrivateRoute/PrivateRoute';
import Login from '../Login/Login';
import Error404 from '../Error404/Error404';

export default class Root extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            currentUser: null
        }
    }

    componentDidMount() {
        authenticationService.currentUser.subscribe(x => this.setState({ currentUser: x }));
    }

    logout() {
        authenticationService.logout();
        history.push('/login');
    }

    render() {
        const { currentUser } = this.state;
        return (
            <Router history={history}>
                <div>
                    {/* {currentUser &&
                        <nav className="navbar navbar-expand navbar-dark bg-dark">
                            <div className="navbar-nav">
                                <Link to="/" className="nav-item nav-link">Home</Link>
                                <a onClick={this.logout} className="nav-item nav-link">Logout</a>
                            </div>
                        </nav>
                        <App />
                        <a onClick={this.logout} className="nav-item nav-link">Logout</a>
                    } */}
                    {/* <div className="jumbotron">
                        <div className="container">
                            <div className="row">
                                <div className="col-md-6 offset-md-3">
                                    <PrivateRoute exact path="/" component={HomePage} />
                                    <Route path="/login" component={LoginPage} />
                                </div>
                            </div>
                        </div>
                    </div> */}
                    <Switch>
                        <PrivateRoute exact path="/" component={App} />
                        <Route path="/login" component={Login} />
                        {/* <Route component={Error404} /> */}
                    </Switch>
                </div>
            </Router>
        );
    }

}
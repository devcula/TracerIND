import React from 'react';
import { Route, Redirect } from 'react-router-dom';

import { authenticationService } from '../../services';

import Header from '../Header/Header';

const PrivateRoute = ({ component: Component, ...rest }) => (
    <Route {...rest} render={props => {
        const currentUser = authenticationService.currentUserValue;
        if (!currentUser) {
            // not logged in so redirect to login page with the return url
            return <Redirect to={{ pathname: '/login', state: { from: props.location } }} />
        }

        // authorised so return component
        return <React.Fragment>
            <Header />
            <Component {...props} />
        </React.Fragment>
    }} />
)

export default PrivateRoute;
import { BehaviorSubject } from 'rxjs';

import { handleResponse } from '../helpers';

import axios from 'axios';

const currentUserSubject = new BehaviorSubject(JSON.parse(localStorage.getItem('currentUser')));

const URI = process.env.REACT_APP_SERVER_URI;

export const authenticationService = {
    login,
    logout,
    refresh,
    currentUser: currentUserSubject.asObservable(),
    get currentUserValue () { return currentUserSubject.value }
};

function login(username, password) {
    // const requestOptions = {
    //     method: 'POST',
    //     headers: { 'Content-Type': 'application/json' },
    //     body: JSON.stringify({ username, password })
    // };

    return axios.post(URI + 'token_jwt_get/', { username, password })
        .then(handleResponse)
        .then(user => {
            // store user details and jwt token in local storage to keep user logged in between page refreshes
            if(user){
                let userData = {
                    username,
                    token: user.token,
                    timestamp: new Date()
                }
                localStorage.setItem('currentUser', JSON.stringify(userData));
                currentUserSubject.next(userData);

                return user;
            }
        });
}

function refresh() {
    // console.log("in refresh method");
    // console.log(currentUserSubject.value);
    if(currentUserSubject.value){
        axios.post(URI + 'token_jwt_refresh/', { token: currentUserSubject.value.token })
            .then(handleResponse)
            .then(data => {
                if(data) {
                    let newData = { ...currentUserSubject.value };
                    newData.token = data.token;
                    newData.timestamp = new Date();

                    localStorage.setItem('currentUser', JSON.stringify(newData));
                    currentUserSubject.next(newData);
                }
            });
        // return true;
    }
    // else{
    //     return true;
    // }
}

function logout() {
    // remove user from local storage to log user out
    localStorage.removeItem('currentUser');
    currentUserSubject.next(null);
}

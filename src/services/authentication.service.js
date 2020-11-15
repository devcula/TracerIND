import { BehaviorSubject } from 'rxjs';

import { handleResponse } from '../helpers';

import axios from 'axios';

const CryptoJS = require('crypto-js');

const currentUserSubject = new BehaviorSubject(JSON.parse(localStorage.getItem('currentUser')));

const URI = process.env.REACT_APP_SERVER_URI;

export const authenticationService = {
    login,
    logout,
    refresh,
    currentUser: currentUserSubject.asObservable(),
    get currentUserValue () { return currentUserSubject.value }
};

function getEncryptedPassword () {
    let decrypted =
        this.state.password;
    let encryptedText = CryptoJS.AES.encrypt(
        decrypted,
        process.env.REACT_APP_PASSWORD_CIPHER_KEY,
    ).toString();
    // console.log(decrypted);
    // console.log(encryptedText);
    return encryptedText;
};

function login(username, password) {

    return axios.post(URI + 'Login/', { username, password: getEncryptedPassword() })
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
    }
}

function logout() {
    // remove user from local storage to log user out
    localStorage.removeItem('currentUser');
    currentUserSubject.next(null);
}

import { authenticationService } from '../services';

export function handleResponse(response) {
    // return response.text().then(text => {
    //     const data = text && JSON.parse(text);
    //     if (!response.ok) {
    //         if ([400, 401, 403].indexOf(response.status) !== -1) {
    //             // auto logout if 401 Unauthorized or 403 Forbidden response returned from api
    //             authenticationService.logout();
    //             window.location.reload();
    //         }

    //         const error = (data && data.message) || response.statusText;
    //         return Promise.reject(error);
    //     }

    //     return data;
    // });
    // console.log(response);
    if(response.status === 200){
        return response.data;
    }
    else {
        authenticationService.logout();
        return false;
    }
    // if([400, 401, 403].indexOf(response.status) !== -1){
    //     authenticationService.logout();
    //     window.location.reload();
    //     return false;
    // }
    // return response.data;
}
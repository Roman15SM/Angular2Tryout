import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class LoginService {
    loginUrl: string = 'api/login';

    constructor(private http: Http) { }

    login(): void {
        this.http.get(this.loginUrl)
            .toPromise()
            .then(response => response.json().data)
            .catch(this.handleError);
    }

    private handleError(error: any): Promise<any> {
        console.error('An error occurred', error); 
        return Promise.reject(error.message || error);
    }
}
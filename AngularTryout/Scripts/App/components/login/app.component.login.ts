import { Component } from '@angular/core';
import { LoginService } from '../services/login.service';

@Component({
    selector: 'login',
    templateUrl: './Scripts/App/components/login/app.component.login.html',
    providers: [LoginService]
})

export class LoginComponent {
    constructor(private loginService: LoginService) { }

    loginUser(login: string, password: string)
    {
        console.log('It works!!! Login: ' + login + ' Password: ' + password);
    }
}
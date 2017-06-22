import { Component } from '@angular/core';
import { LoginService } from '../../services/login.service';

@Component({
    moduleId: module.id,
    selector: 'login',
    templateUrl: 'app.component.login.html',
    styleUrls: ["app.component.login.css"],
    providers: [LoginService]
})

export class LoginComponent {
    constructor(private loginService: LoginService) { }

    loginUser(login: string, password: string)
    {
        console.log('It works!!! Login: ' + login + ' Password: ' + password);
        this.loginService.login();
    }
}
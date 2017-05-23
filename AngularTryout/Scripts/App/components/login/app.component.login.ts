import { Component } from '@angular/core';

@Component({
    selector: 'login',
    templateUrl: './Scripts/App/components/login/app.component.login.html'
})

export class LoginComponent {
    loginUser(login: string, password: string)
    {
        console.log('It works!!! Login: ' + login + ' Password: ' + password);
    }
}
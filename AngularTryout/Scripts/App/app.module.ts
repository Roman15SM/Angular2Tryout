import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
//import { RouterModule } from '@angular/router'

import { HelloWorldComponent } from './components/hello-world/app.component.hello-world';
import { LoginComponent } from './components/login/app.component.login';
import { HomeComponent } from './components/home/app.component.home';

const routes = [
    //{ path: '', component: LoginComponent, useAsDefault: true, outlet: 'login' },
    //{ path: 'login', component: LoginComponent, outlet: 'login'},
    //{ path: 'home', component: HomeComponent }
];

@NgModule({
    imports: [BrowserModule, HttpModule], // RouterModule.forRoot(routes)],
    declarations: [HelloWorldComponent, LoginComponent, HomeComponent],
    bootstrap: [HelloWorldComponent, LoginComponent, HomeComponent]
})

export class AppModule { }
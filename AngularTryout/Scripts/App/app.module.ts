import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';

import { PartyHardAppComponent } from './components/party-hard-app/app.component.party-hard-app';
import { LoginComponent } from './components/login/app.component.login';
import { HomeComponent } from './components/home/app.component.home';

const routes: Routes = [
    {
        path: 'login',
        component: LoginComponent
    },
    {
        path: 'home',
        component: HomeComponent
    },
    {
        path: '',
        redirectTo: '/home',
        pathMatch: 'full'
    },
    {
        path: '**',
        component: LoginComponent
    } 
];

@NgModule({
    imports: [BrowserModule, HttpModule, RouterModule.forRoot(routes)],
    declarations: [PartyHardAppComponent, LoginComponent, HomeComponent],
    bootstrap: [PartyHardAppComponent]
})

export class AppModule { }
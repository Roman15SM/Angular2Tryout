import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import { HelloWorldComponent } from './components/hello-world/app.component.hello-world';
import { LoginComponent } from './components/login/app.component.login';

@NgModule({
    imports: [BrowserModule, HttpModule],
    declarations: [HelloWorldComponent, LoginComponent],
    bootstrap: [HelloWorldComponent, LoginComponent]
})

export class AppModule { }
import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Injector } from '@angular/core';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AlertsModule } from '@twine/alerts';
import { LoginModule, LoginService } from '@twine/login';
import { MessageBoxModule } from '@twine/messagebox';
import { ProgressModule } from '@twine/progress';
import { LoadingModule, LoadingService } from '@twine/loading';

import { AppRoutingModule } from './app-routing.module';
import { AppRegisterModule } from './modules/app-register.module';
import { AppHeaderModule } from './modules/app-header.module';
import { AppHomeModule } from './modules/app-home.module';
import { MaterialModule } from './modules/material.module';

import { AppComponent } from './app.component';
import { FooterComponent } from './components/footer/footer.component';

import { UsersessionService } from './services/usersession.service';
import { AppRegisterService } from './services/app-register.service';
import { setInjector } from './app.globals';

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent
  ],

  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    AlertsModule,
    LoginModule,
    MessageBoxModule,
    ProgressModule,
    LoadingModule,
    AppRegisterModule,
    AppHeaderModule,
    AppHomeModule,
    MaterialModule
  ],

  providers: [
    UsersessionService,
    AppRegisterService,
    {
      provide: HTTP_INTERCEPTORS,
      useExisting: UsersessionService,
      multi: true
    }
  ],

  bootstrap: [AppComponent]
})

export class AppModule {

  constructor(private injector: Injector, private loginService: LoginService, private loadingService: LoadingService) {
    setInjector(injector);
    this.loadingService.loadingUrl = {
      url: "assets/loading.gif"
    }
    this.loginService.googleConfig = {
      key: '284779082637-o4uhhhiirkb7j89r8qd0jfkfmddnmq94.apps.googleusercontent.com',
      scope: 'email',
      url: 'https://www.google.com/accounts/Logout?continue=https://appengine.google.com/_ah/logout?continue=http://localhost:4200'
    };
    this.loginService.facebookConfig = {
      key: '1194493210684394',
      scope: 'public_profile, email',
      url: '/me?fields=id,name,email,first_name,last_name,picture.height(500).width(500){url}'
    };
  }
}

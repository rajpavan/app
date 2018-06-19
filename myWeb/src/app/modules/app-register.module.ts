import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpModule } from '@angular/http';

import { LoginModule } from '@twine/login';
import { ProgressModule } from '@twine/progress';
import { MessageBoxModule } from '@twine/messagebox';

import { AppHeaderModule } from './app-header.module';
import { AppHomeModule } from './app-home.module';
import { MaterialModule } from './material.module';

import { RegisterComponent } from '../components/register/register.component';
import { SignInComponent } from '../components/sign-in/sign-in.component';
import { RegisteruserconfirmComponent } from '../components/registeruserconfirm/registeruserconfirm.component';
import { EulaComponent } from '../components/eula/eula.component';

@NgModule({
  imports: [
    CommonModule,
    HttpModule,
    AppHeaderModule,
    AppHomeModule,
    LoginModule,
    ProgressModule,
    MessageBoxModule,
    MaterialModule
  ],

  declarations: [
    RegisterComponent,
    SignInComponent,
    RegisteruserconfirmComponent,
    EulaComponent    
  ]
})

export class AppRegisterModule { }

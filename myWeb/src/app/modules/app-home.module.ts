import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AppHeaderModule } from './app-header.module';

import { HomeComponent } from '../components/home/home.component';
import { HomewithsessionComponent } from '../components/homewithsession/homewithsession.component';
import { TrymeComponent } from '../components/tryme/tryme.component';
import { MaterialModule } from './material.module';

@NgModule({
  imports: [
    CommonModule,
    AppHeaderModule,
    MaterialModule
  ],

  declarations: [
    HomeComponent,
    HomewithsessionComponent,
    TrymeComponent
  ],

  exports: [
    HomeComponent,
    HomewithsessionComponent,
    TrymeComponent
  ]
})

export class AppHomeModule { }

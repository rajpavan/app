import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AppHeaderModule } from './app-header.module';

import { HomeComponent } from '../components/home/home.component';
import { HomewithsessionComponent } from '../components/homewithsession/homewithsession.component';
import { TrymeComponent } from '../components/tryme/tryme.component';
import { FooterComponent } from '../components/footer/footer.component';

@NgModule({
  imports: [
    CommonModule,
    AppHeaderModule
  ],

  declarations: [
    HomeComponent,
    HomewithsessionComponent,
    TrymeComponent,
    FooterComponent
  ],

  exports: [
    HomeComponent,
    HomewithsessionComponent,
    TrymeComponent
  ]
})

export class AppHomeModule { }

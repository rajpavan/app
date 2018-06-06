import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { MessageBoxModule } from 'messagebox';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    MessageBoxModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }

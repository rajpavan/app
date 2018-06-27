import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { MaterialModule } from './material.module';
import { HeaderComponent } from '../components/header/header.component';
import { MenuComponent } from '../components/menu/menu.component';
import { ProfileComponent } from '../components/profile/profile.component';
import { UseraccountComponent } from '../components/useraccount/useraccount.component';
import { HelpComponent } from '../components/help/help.component';
import { FooterComponent } from '../components/footer/footer.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    MaterialModule
  ],

  declarations: [
    HeaderComponent,
    MenuComponent,
    ProfileComponent,
    UseraccountComponent,
    HelpComponent,
    FooterComponent
  ],

  exports: [
    HeaderComponent,
    FooterComponent
  ]
})

export class AppHeaderModule { }

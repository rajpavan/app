import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { MessageBox, DialogBoxButtons } from '@twine/messagebox';

import { AppRegisterService } from '../../services/app-register.service';
import { UsersessionService, ILogin } from '../../services/usersession.service';
import { LoginService } from '@twine/login';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})

export class SignInComponent implements OnInit {

  private dialogResult;

  constructor(private registerService: AppRegisterService,
    private router: Router,
    private session: UsersessionService,
    private loginService: LoginService) {
    this.loginService.page = {
      path: 'Sign-In'
    };
    this.loginService.state = true;
  }

  ngOnInit() {
  }

  public async loginSuccess(data: any) {
    this.registerService.data = <ILogin>data;

    let user: boolean = await this.registerService.checkUser();
    if (user == true) {
      this.session.establish(data);
      this.router.navigate(['/homewithsession']);
    } else {
      this.dialogBox();
    }
  }

  private async dialogBox() {
    this.dialogResult = await MessageBox.showDialog('Looks like You are not Registered', 'Redirecting you to register page', DialogBoxButtons.OkCancel);

    if (this.dialogResult == 2) {
      this.router.navigate(['/register']);
    } else {
      this.registerService.data.logout();
      this.router.navigate(['/home']);
    }
  }
}

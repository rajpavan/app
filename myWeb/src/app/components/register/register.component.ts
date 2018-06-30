import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AppRegisterService } from '../../services/app-register.service';
import { UsersessionService, ILogin } from '../../services/usersession.service';
import { MessageBox, DialogBoxButtons } from '@twine/messagebox';
import { LoginService } from '@twine/login';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})

export class RegisterComponent implements OnInit {

  public state: string = 'register';
  public dialogResult;

  constructor(private router: Router,
    private registerService: AppRegisterService,
    private sessionService: UsersessionService,
    private loginService: LoginService) {
    this.loginService.page = {
      path: 'Register'
    };
    this.loginService.state = false;
  }

  ngOnInit() {
  }

  public async loginSuccess(data: any) {
    this.registerService.data = <ILogin>data;
    console.log('data ==== ', data);    

    let newUser: boolean = await this.registerService.checkUser();
    if (newUser == true) {
      console.log('newUser from loginSuccess === ', newUser);      
      this.dialogBox();
      this.sessionService.establish(data);
    } else {
      this.state = 'info';
      console.log('newUser from loginSuccess === ', newUser);
    }
  }

  private async dialogBox() {
    this.dialogResult = await MessageBox.showDialog('Looks like you are already Registered',
      'Redirecting you to Home',
      DialogBoxButtons.OkCancel);

    if (this.dialogResult == 2) {
      this.router.navigate(['/homewithsession']);
    } else {
      this.registerService.data.logout();
      this.router.navigate(['/home']);
    }
  }

  private infoContinue() {
    this.state = 'eula';
  }

  private eulaAccept() {
    this.sessionService.establish(this.registerService.data)
      .then(() => {
        this.state = 'complete';
        this.router.navigate(['/homewithsession']);
      });
  }
}

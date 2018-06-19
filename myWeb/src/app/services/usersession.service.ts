import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Router } from '@angular/router';
import { HttpInterceptor, HttpRequest, HttpEvent, HttpHandler } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class UsersessionService implements HttpInterceptor {

  private jwt: any;
  private sessionInfo: ILogin = <ILogin>{};
  private userInfoSubject: BehaviorSubject<IUser> = new BehaviorSubject<IUser>(this.sessionInfo);

  constructor(private router: Router) { }

  public get data(): Observable<IUser> {
    return this.userInfoSubject.asObservable();
  }

  public intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    if (this.getjwt() != null) {
      req = req.clone({
        headers: req.headers.set("authorization", this.getjwt())
      });
    } else {
      req = req.clone({
        headers: req.headers.set("authorization", "jwt is null")
      });
    }
    return next.handle(req);
  }

  public getjwt() {
    return this.jwt;
  }

  public establish(info: ILogin): Promise<void> {
    this.sessionInfo = info;
    this.userInfoSubject.next(this.sessionInfo);

    let data = {
      'providerID': this.sessionInfo.providerID,
      'providerName': this.sessionInfo.providerName,
      'firstName': this.sessionInfo.firstName,
      'lastName': this.sessionInfo.lastName,
      'email': this.sessionInfo.email,
      'photoUrl': this.sessionInfo.photoUrl
    };

    let establishPromise = (resolve, reject) => {
      setTimeout(() => console.log('timer done'), 3000);
      let url: string = null;

      if (this.sessionInfo.providerName === 'google') {
        url = 'api/auth/google';
      } else if (this.sessionInfo.providerName === 'facebook') {
        url = 'api/auth/facebook';
      } else if (this.sessionInfo.providerName === 'microsoft') {
        url = 'api/auth/microsoft';
      } else if (this.sessionInfo.providerName === 'linkedin') {
        url = 'api/auth/linkedin';
      } else {
        throw new Error('Unsupported Provider');
      }

      let xhr = new XMLHttpRequest();
      xhr.open('POST', 'http://localhost:3000/' + url);
      xhr.setRequestHeader('Content-Type', 'application/json');
      xhr.setRequestHeader('token', this.sessionInfo.token);
      xhr.onreadystatechange = () => {
        if (xhr.readyState == 4 && xhr.status == 200) {
          this.jwt = xhr.response;
          console.log(this.jwt);
          
        }
      };
      xhr.send(JSON.stringify(data));

      if (xhr.response != null) {
        resolve();
      } else {
        reject();
      }
    };

    return new Promise(establishPromise);
  }

  public async logOut() {
    await this.sessionInfo.logout();
    this.jwt = null;
    this.router.navigate(['/home']);
  }
}

export class IUser {
  providerID: string;
  providerName: string;
  firstName: string;
  lastName: string;
  email: string;
  photoUrl: string;
}

export interface ILogin extends IUser {
  token: string;
  logout(): void;
}

import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { ILogin } from './usersession.service';

@Injectable({
  providedIn: 'root'
})

export class AppRegisterService {

  public data: ILogin;

  constructor(private http: Http) { }

  public async checkUser(): Promise<boolean> {
    let result: boolean = false;
    let userData = {
      'providerID': this.data.providerID
    }

    try {
      let response = await this.http.post('http://localhost:3000/checkuser', userData).toPromise();
      if(response.status == 200) {
        result = true;
      } else {
        result = false;
      }
    } catch (err) {
      console.log('error', err);
    }

    return result;
  }
}

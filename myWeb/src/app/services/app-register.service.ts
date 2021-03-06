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
    console.log('In Check User');    

    try {
      let response = await this.http.post('http://localhost:3000/checkuser', userData).toPromise();
      if(response.status == 200) {
        result = true;
        console.log('result === ', result);
      } else if (response.status == 400) {
        result = false;
        console.log('result === ', result);
      }
    } catch (err) {
      console.log('error', err);
    }

    return result;
  }
}

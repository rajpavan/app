import { Component, OnInit } from '@angular/core';
import { IUser, UsersessionService } from '../../services/usersession.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-homewithsession',
  templateUrl: './homewithsession.component.html',
  styleUrls: ['./homewithsession.component.css']
})

export class HomewithsessionComponent implements OnInit {

  public info: IUser;

  constructor(private session: UsersessionService, private router: Router) { }

  ngOnInit() {
    this.session.data.subscribe(info => this.info = info);
  }

  public async logOff() {
    await this.session.logOut();
  }
}

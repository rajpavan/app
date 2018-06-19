import { Component, OnInit } from '@angular/core';
import { IUser, UsersessionService } from '../../services/usersession.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-homewithsession',
  templateUrl: './homewithsession.component.html',
  styleUrls: ['./homewithsession.component.css']
})

export class HomewithsessionComponent implements OnInit {

  private info: IUser;

  constructor(private session: UsersessionService, private router: Router) { }

  ngOnInit() {
    this.session.data.subscribe(info => this.info = info);
  }

  private async logOff() {
    await this.session.logOut();
  }
}

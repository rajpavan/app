import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})

export class HeaderComponent implements OnInit {

  @Input() menuIcon: string = "show";
  @Input() login: string = "show";

  public showMenu: boolean = false;
  public showLogin: boolean = false;
  public showMenuIcon: boolean = false;

  constructor(private router: Router) { }

  ngOnInit() {
    if (this.menuIcon == "show") {
      this.showMenuIcon = true;
    }
    if (this.login == "show") {
      this.showLogin = true;
    }
  }

  toggleMenu() {
    this.showMenu = !this.showMenu;
  }
}

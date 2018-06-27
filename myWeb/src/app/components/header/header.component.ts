import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})

export class HeaderComponent implements OnInit {

  // @Input() menu: string = "show";
  // @Input() login: string = "show";

  private showMenu: boolean = false;
  // private showLogin: boolean = false;

  constructor(private router: Router) { }

  ngOnInit() {
    // if (this.menu == "show") {
    //   this.showMenu = true;
    // }
    // if (this.login == "show") {
    //   this.showLogin = true;
    // }
  }

  toggleMenu() {
    this.showMenu = !this.showMenu;
  }
}

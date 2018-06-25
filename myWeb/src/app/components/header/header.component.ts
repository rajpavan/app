import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})

export class HeaderComponent implements OnInit {

  private showMenu: boolean = false;

  constructor(private router: Router) { }

  ngOnInit() {
  }

  toggleMenu() {
    this.showMenu = !this.showMenu;
  }
}

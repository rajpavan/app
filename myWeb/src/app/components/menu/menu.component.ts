import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})

export class MenuComponent implements OnInit {

  @Input() name: string = 'show';
  @Input() email: string = 'show';

  showName: boolean;
  showEmail: boolean;

  constructor() { }

  ngOnInit() {
    if (this.name == 'show') {
      this.showName = true;
    }
    if (this.email == 'show') {
      this.showEmail = true;
    }
  }

}

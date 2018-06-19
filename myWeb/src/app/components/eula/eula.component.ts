import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
import { AppRegisterService } from '../../services/app-register.service';
import { MessageBox, DialogBoxButtons } from '@twine/messagebox';

@Component({
  selector: 'app-eula',
  templateUrl: './eula.component.html',
  styleUrls: ['./eula.component.css']
})

export class EulaComponent implements OnInit {

  @Output() onaccept: EventEmitter<any> = new EventEmitter();

  private buttonStatus = true;
  public dialogResult;

  constructor(private router: Router, private registerService: AppRegisterService) { }

  ngOnInit() {
  }

  onAccept() {
    this.onaccept.emit(null);
  }

  enableAccept() {
    this.buttonStatus = ((this.buttonStatus === true) ? false : true);
  }

  async dialogBox() {
    this.dialogResult = await MessageBox.showDialog('Decline Confirmation', 'Are You Sure?', DialogBoxButtons.YesNo);
    if (this.dialogResult == 0) {
      this.registerService.data.logout();
      this.router.navigate(['/home']);
    }
  }
}

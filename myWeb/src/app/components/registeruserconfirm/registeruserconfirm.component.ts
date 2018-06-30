import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
import { AppRegisterService } from '../../services/app-register.service';
import { MessageBox, DialogBoxButtons } from '@twine/messagebox';

@Component({
  selector: 'app-registeruserconfirm',
  templateUrl: './registeruserconfirm.component.html',
  styleUrls: ['./registeruserconfirm.component.css']
})

export class RegisteruserconfirmComponent implements OnInit {

  @Output() oncontinue: EventEmitter<any> = new EventEmitter;

  private dialogResult;

  constructor(private router: Router,
    public registerService: AppRegisterService) { }

  ngOnInit() {
  }

  public onContinue() {
    this.oncontinue.emit(null);
  }

  public async onCancel() {
    this.dialogResult = await MessageBox.showDialog('Decline Confirmation', 'Are You Sure you want to Leave?', DialogBoxButtons.YesNo);
    if (this.dialogResult == 0) {
      this.registerService.data.logout();
      this.router.navigate(['/home']);
    }
  }

}

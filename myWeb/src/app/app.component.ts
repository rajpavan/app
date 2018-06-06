import { Component } from '@angular/core';
import { MessageBox, DialogBoxButtons } from 'messagebox';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'app';

  public dialogResult;

  async test() {
    this.dialogResult = await MessageBox.showDialog('Test', 'Testing the Messagebox', DialogBoxButtons.OkCancel);
  }
}

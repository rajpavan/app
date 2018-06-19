import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-tryme',
  templateUrl: './tryme.component.html',
  styleUrls: ['./tryme.component.css']
})

export class TrymeComponent implements OnInit {

  private restrictedResponse;
  private restrictedResponseError;
  private genericResponse;
  private dialogResult;

  constructor(private http: HttpClient) { }

  ngOnInit() {
  }

  private tryme() {
    this.tryGeneric();
    this.tryRestricted();
  }

  private tryRestricted(): Promise<void> {
    return new Promise<void>(resolve => {
      this.http.post('http://localhost:3000/api/restricted', '')
        .subscribe(res => {
          this.restrictedResponse = res;
          resolve();
        }, err => {
          this.restrictedResponseError = 'Access Denied';
        });
    })
  }

  private tryGeneric(): Promise<void> {
    return new Promise<void>(resolve => {
      this.http.post('http://localhost:3000/api/generic', '')
        .subscribe(res => {
          this.genericResponse = res;
          resolve();
        }, err => console.log('Generic Error: ', err)
        );
    })
  }
}

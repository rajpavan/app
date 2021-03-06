import { Component } from '@angular/core';
import { trigger, style, transition, animate, keyframes, query, stagger } from '@angular/animations';
import { AlertService } from '@twine/alerts';
import { AlertsCollection } from './models/alert.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  animations: [
    trigger('alerts', [
      transition('* => *', [
        query(':enter', style({ opacity: 0 }), { optional: true }),
        query(':enter', stagger('300ms', [
          animate('.6s ease-in', keyframes([
            style({ opacity: 0, transform: 'translateY(-75%)', offset: 0 }),
            style({ opacity: .5, transform: 'translateY(35px)', offset: 0.3 }),
            style({ opacity: 1, transform: 'translateY(0)', offset: 1.0 }),
          ]))]), { optional: true }),

        query(':leave', stagger('300ms', [
          animate('.6s ease-out', keyframes([
            style({ opacity: 1, transform: 'translateY(0)', offset: 0 }),
            style({ opacity: .5, transform: 'translateY(35px)', offset: 0.3 }),
            style({ opacity: 0, transform: 'translateY(-75%)', offset: 1.0 }),
          ]))]), { optional: true })
      ])
    ])
  ]
})

export class AppComponent {

  message: string;
  index: number = 10;

  private alerts: AlertsCollection = new AlertsCollection();

  constructor(private alertService: AlertService) {
    // this.alerts.newAlert.subscribe(item => this.alertService.addNew(item.id, item.message, item.icon));
    // setInterval(() => this.alerts.load(), 5000);
    // this.alerts.load();
  }

  private addNewAlert() {
    this.alerts.add(this.index++, this.message, 'info');
    this.message = '';
  }
}

import { Component, OnInit } from '@angular/core';
import { NotificationService } from '../notification.service';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'app-input-notification',
  templateUrl: './input-notification.component.html',
  styleUrls: ['./input-notification.component.scss'],
})
export class InputNotificationComponent {
  constructor(private not: NotificationService) {}

  SendNotificationfromInput(data: any) {
    this.not.notification.next(data.value);
  }
}

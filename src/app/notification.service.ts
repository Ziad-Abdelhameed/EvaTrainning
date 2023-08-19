import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
@Injectable({
  providedIn: 'root',
})
export class NotificationService {
  public notification = new BehaviorSubject<string>(
    'Hello first time from service'
  );
  constructor() {}

  sendNotification(data: string) {
    this.notification.next(data);
  }
}

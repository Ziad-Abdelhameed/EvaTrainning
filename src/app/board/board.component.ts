import { Component, OnInit } from '@angular/core';
import { NotificationService } from '../notification.service';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.scss'],
})
export class BoardComponent implements OnInit {
  message: string;
  constructor(private noti: NotificationService) {}

  ngOnInit() {
    this.noti.notification.subscribe((d) => {
      this.message = d;
    });
  }
}

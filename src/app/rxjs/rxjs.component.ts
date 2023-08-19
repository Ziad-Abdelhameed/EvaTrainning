import { Component, OnInit } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';

@Component({
  selector: 'app-rxjs',
  templateUrl: './rxjs.component.html',
  styleUrls: ['./rxjs.component.scss'],
})
export class RxjsComponent implements OnInit {
  ngOnInit(): void {
    //subject
    // const sub = new Subject<number>();
    // sub.subscribe((d) => console.log(d));
    // sub.next(200);
    const sub2 = new BehaviorSubject<number>(12);
    sub2.next(200);
    sub2.subscribe((d) => console.log(d));
    sub2.next(300);
  }
}

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InputNotificationComponent } from './input-notification.component';

describe('InputNotificationComponent', () => {
  let component: InputNotificationComponent;
  let fixture: ComponentFixture<InputNotificationComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [InputNotificationComponent]
    });
    fixture = TestBed.createComponent(InputNotificationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

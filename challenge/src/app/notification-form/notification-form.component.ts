import { Component, Output, EventEmitter } from '@angular/core';
import { Notification } from '../shared/notification';
import { NotificationComponent } from '../notification/notification.component';

@Component({
  selector: 'notification-form',
  templateUrl: './notification-form.component.html',
  styleUrls: ['./notification-form.component.css']
})
export class NotificationFormComponent {
  constructor() {
  }
  categories = ['error', 'success', 'info'];
  notification = new Notification(100, "Example Header", "Example body", this.categories[0]);
  @Output() onCreate = new EventEmitter<any>();
  
  // when the form is submitted it emites the notification
  onSubmit() { 
    this.onCreate.emit(this.notification);
  }
}

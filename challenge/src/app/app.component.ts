import { Component, OnInit } from '@angular/core';
import { Notification } from './shared/notification';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'app works!';
  notifications = [];
  constructor() {}
  
  // removes notification from the notifications array by id
  removeNotification(id, arr) {
    arr.forEach(notification => {
      if(notification.id === id) {
        arr.splice(arr.indexOf(notification), 1);
      }
    });
    return arr;
  }
  onCreate(notification){
    // if there are more than 5 notifications, eliminate the oldest one
    if (this.notifications.length >= 5) { this.notifications.splice(0, 1)}
      // generate a unique ID to be able to delete by
    let id = notification.override && notification.override.id ? notification.override.id : Math.random().toString(36).substring(3);
    // create the object - also gets rid of form's data binding
    let notif = {
      id: id, 
      header: notification.header, 
      body: notification.body, 
      category: notification.category};
    // add the recent notification to the notifications array
    this.notifications.push(notif);
    // if info, set timeout to 90 seconds
    if (notif.category == "info") {
      setTimeout(() => this.notifications = this.removeNotification(id, this.notifications), 90000);
    }
  }
}

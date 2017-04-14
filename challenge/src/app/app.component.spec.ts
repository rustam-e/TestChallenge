/* tslint:disable:no-unused-variable */

import { ComponentFixture, TestBed, async } from '@angular/core/testing';
import { AppComponent } from './app.component';

describe('App: Challenge', () => {
  beforeEach(() => {
    this.app = new AppComponent();
    this.app.notifications = [];

  });

  it('should create the app', async(() => {
    expect(this.app).toBeTruthy();
  }));

  it('should have title property', () => {
    expect(this.app.title).toBe('app works!');
  });

  it('should have notifications property', () => {
    expect(this.app.notifications).toBeTruthy();
  });

  it('should eliminate correct object by id', () => {
    this.arr = [{id: 1}, {id: 0}, {id: 2}];
    this.arr = this.app.removeNotification(1, this.arr);
    expect(this.arr.length).toBe(2);
    expect(this.arr).toEqual([{id: 0}, {id: 2}]);
  });

  it('should create a new object with the given parameters', () => {
    this.notif = [{id: 1, header: "example header", body: "example body", category:'error'}];
    this.arr = this.app.onCreate(this.notif);
    expect(this.app.notifications.length).toBe(1);
  });

});

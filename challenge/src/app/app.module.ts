import { AlertModule } from 'ng2-bootstrap/ng2-bootstrap';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { NotificationComponent } from './notification/notification.component';
import { NotificationFormComponent } from './notification-form/notification-form.component';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent,
    NotificationComponent,
    NotificationFormComponent
  ],
  imports: [
    AlertModule.forRoot(),
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

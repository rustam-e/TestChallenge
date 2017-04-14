import { Component, Input, ViewEncapsulation, NgZone, Output, EventEmitter, OnInit} from '@angular/core';
import { trigger, state, style, transition, animate} from '@angular/animations';
import { Notification } from '../shared/notification';

@Component({
	selector: 'notification',
	templateUrl: './notification.component.html',
    styleUrls: ['./notification.component.css']
})

export class NotificationComponent implements OnInit {
    @Input() public notifications;
    @Input() public item: Notification;
    @Output() remove = new EventEmitter<any>();
    animate: "scale";
    constructor( ) {}

    ngOnInit(){
    	console.log('this.item', this.item);
    }

    onClick(): void {
    	//emitting remove event
    	// the notifications need ID in order to remove by them
        this.remove.emit({id: this.item.id, notifications: this.notifications});
    }

}

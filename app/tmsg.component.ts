import { Component } from '@angular/core';

@Component({
	moduleId: module.id,
    selector: 'my-app',
	template:`<router-outlet></router-outlet>`,
	styleUrls: [ 'tmsg.component.css' ]
})

export class TmsgComponent {
	title = 'Tour of Interactive Chatting Response';
}

import { Component } from '@angular/core';

@Component({
	moduleId: module.id,
    selector: 'my-app',
	template:`<my-login>Loading...</my-login>`,
	styleUrls: [ 'tmsg.component.css' ]
})

export class TmsgComponent {
	title = 'Tour of Interactive Chatting Response';
}

import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Location }               from '@angular/common';

import { Counselor } 			from './counselor';
import { CounselorService }		from './counselor.service';

@Component({
	moduleId: module.id,
    selector: 'my-main',
	templateUrl: 'main.component.html',
	styleUrls: [ 'main.component.css' ]
})

export class MainComponent implements OnInit {

	counselors: Counselor[];
	counselor: Counselor;

	constructor(
		private route: ActivatedRoute,
		private counselorService: CounselorService,
		private location: Location
	) {}

	ngOnInit(): void {
		//this.getCounselors();
		this.route.params.forEach((params: Params) => {
			let idx = +params['idx'];
			this.counselorService.getCounselor(idx)
				.then(counselor => this.counselor = counselor);
		});
	}

	delete(counselor: Counselor): void {
		this.counselorService
			.delete(counselor.idx)
			.then(() => {
				this.counselors = this.counselors.filter(h => h !== counselor);
			});
	}

	gotoLogin(): void {
		this.router.navigate(['/login']);
	}

	onLogout(): void {
		// 추후 Database를 통해 처리 시 HTTP를 통해 아웃 처리
		// 1. 로그아웃 처리 등....
		// 2. 상담 이력 저
		delete(this.counselor);
		gotoLogin();
	}
}
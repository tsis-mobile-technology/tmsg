import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Counselor } from './counselor';
import { CounselorService } from './counselor.service';

@Component({
	moduleId: module.id,
    selector: 'my-main',
    template:`<my-main>Loading...</my-main>`
})

export class MainComponent implements OnInit {

	counselors: Counselor[];
	selectedCounselor: Counselor;

	constructor(
		private router: Router,
		private counselorService: CounselorService
	) {}

	getCounselors(): void {
		//this.counselorService.getCounselors().then(counselors => this.counselors = counselors);
		// 추후 세션 관리 기능 추가시 사용
		// 1. 아이디 저장
		// 2. 로그인 상태 유지 등...
		//this.counselorService.getCounselorsSlowly().then(counselors => this.counselors = counselors);
		console.log("Login.component:" + "getCounselors() call");
	}

	ngOnInit(): void {
		this.getCounselors();
	}
}
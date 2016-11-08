import { Component, OnInit }	from '@angular/core';
import { Router } 				from '@angular/router';
import { FormGroup, FormControl, Validators, FormBuilder }	from '@angular/forms';

import { Counselor } 			from './counselor';
import { CounselorService } 	from './counselor.service';

@Component({
	moduleId: module.id,
    selector: 'my-login',
	templateUrl: 'login.component.html',
	styleUrls: [ 'login.component.css' ]
})

export class LoginComponent implements OnInit {

	counselors: Counselor[];
	selectedCounselor: Counselor;

	public myForm: FormGroup; // model driven form
	public submitted: boolean;
	public events: any[] = [];

	constructor(
		private router: Router,
		private counselorService: CounselorService,
		private formBuilder: FormBuilder
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

		this.myForm = this.formBuilder.group({
			loginid: ['', [<any>Validators.required, <any>Validators.minLength(3)]],
			password: ['', [<any>Validators.required]],
			issaveid: [],
			isautologin: []
		});
	}

	onSubmitTemplateBased() {
		let loginid: string;
		let password: string;
		let issaveid: boolean;
		let isautologin: boolean;

		console.log(this.myForm.value);

		loginid = this.myForm.controls["loginid"].value;
		password = this.myForm.controls["password"].value;
		issaveid = this.myForm.controls["issaveid"].value;
		isautologin = this.myForm.controls["isautologin"].value;

		this.add(loginid, password, issaveid, isautologin);
	}

	onSelect(counselor: Counselor): void {
		this.selectedCounselor = counselor;
	}

	gotoMain(): void {
		this.router.navigate(['/main', this.selectedCounselor.idx]);
	}

	add(loginid: string, password: string, issaveid: boolean, isautologin: boolean): void {
		let idx: number;
		let status: number;
		let name: string;
		idx = 1; /* Counselor index value */
		status = 4; /* 4: 휴식 */
		name = loginid + "_" + idx;

		if (!idx || !loginid || !name) { return; }
		this.counselorService.create(idx, loginid, status, name, password, issaveid, isautologin)
			.then(counselor => {
				this.counselors.push(counselor);
				this.selectedCounselor = null;
		});
	}

	delete(counselor: Counselor): void {
		this.counselorService
			.delete(counselor.idx)
			.then(() => {
				this.counselors = this.counselors.filter(h => h !== counselor);
				if (this.selectedCounselor === counselor) { this.selectedCounselor = null; }
			});
	}

	onLogin(): void {
		// 추후 Database 를 통해 처리 시 HTTP 를 통해 기본 정보를 가져 온다 
		// 1. 상담사 관리 등....
		// 2. 로그인 이력 처리 등....

	}

	onLogout(): void {
		// 추후 Database를 통해 처리 시 HTTP를 통해 아웃 처리
		// 1. 로그아웃 처리 등....
		// 2. 상담 이력 저
	}
}
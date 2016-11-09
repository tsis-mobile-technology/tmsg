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
	public myIdx: number;	// login counselor's idx

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
		this.counselorService.getCounselorSlowly().then(counselors => this.counselors = counselors);
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

		this.onLogin();
		this.add(loginid, password, issaveid, isautologin);
		this.gotoMain();
	}

	gotoMain(): void {
		this.router.navigate(['/main', this.myIdx]);
	}

	add(loginid: string, password: string, issaveid: boolean, isautologin: boolean): void {
		let idx: number;
		let status: number;
		let name: string;
		idx = this.myIdx; /* Counselor index value : 추후 서버에서 받아 오기 */
		status = 4; /* 4: 휴식 */
		name = loginid + "_" + idx;

		if (!idx || !loginid || !name) { return; }
		this.counselorService.create(idx, loginid, status, name, password, issaveid, isautologin)
			.then(counselor => {
				this.counselors.push(counselor);
				this.selectedCounselor = null;
			});
	}

	onLogin(): void {
		// 추후 Database 를 통해 처리 시 HTTP 를 통해 기본 정보를 가져 온다 
		// 1. 상담사 패스워드 확인 등....
		// 2. 로그인 이력 처리 등....
		this.myIdx = 1;
	}

	onAuthLogin(): void {
		// 로그인 상태 유지 클릭시 
	}

	onIsSaveId(): void {
		// 로그인 아이디 저장 시 
	}
}
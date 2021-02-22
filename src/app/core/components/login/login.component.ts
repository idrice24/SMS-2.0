import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/auth/services/auth.service';
import { Router, NavigationExtras } from '@angular/router';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { UserService } from 'src/app/shared/services/user.service';
import { AppUser } from 'src/app/shared/models/app-user';
import { MissionService } from 'src/app/shared/services/mission.service';
import { Title } from '@angular/platform-browser';
// REF: https://angular.io/start/start-forms

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  message: ' ';
  loginForm: FormGroup;
  appUser: AppUser;

  constructor(
  	private authService: AuthService,
  	private titleSerice: Title,
  	private mission: MissionService,
  	private formBuilder: FormBuilder) {
  	this.appUser = {
  		fName: '',
  		lName: '',
  		isAdmin: false,
  		email: '',
  		password: '',
  		id: 0
  	};
  }

  ngOnInit(): void {
  	this.loginForm = new FormGroup({
  		fName: new FormControl(this.appUser.fName, [
        Validators.required,
        Validators.minLength(4),
        // forbiddenNameValidator(/bob/i)
      ]),

  		
  	})
  }

}

import { Component, OnInit } from '@angular/core';
import { AppUser } from 'src/app/shared/models/app-user';
import { ActivatedRoute, Router } from '@angular/router';
import { DialogService } from 'src/app/shared/services/dialog.service';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import { UserService } from 'src/app/shared/services/user.service';

@Component({
  selector: 'app-registry',
  templateUrl: './registry.component.html',
  styleUrls: ['./registry.component.scss']
})
export class RegistryComponent implements OnInit {
  registryForm;
  appUser: AppUser;
  users: AppUser[];
  message: string;
  numberOfUsers: number;

  constructor(
  	private route: ActivatedRoute,
  	private router: Router,
  	private dilogService: DialogService,
  	private userService: UserService,
  	private formBuilder: FormBuilder) { 
  	this.registryForm = this.registryForm.group(
  	{
  		fName: '',
  		lName: '',
  		email: '',
  		password: ''
  	});
  }

  ngOnInit(): void {
  	this.route.data.subscribe((data:{appUser: AppUser})=>{
  		this.appUser = data.appUser
  	});

  	this.getNumberOfUsers();
    this.getUsers();

  }
 onSubmit(appUserData){
 	const appUserId = this.appUser ? this.appUser.id: null;
 	this.router.navigate(['/home']);
 }

 getUsers(): void {
    this.userService.getUsers()
      .subscribe(users => this.users = users);
  }

  delete(appUser: AppUser): void {
    this.users = this.users.filter(user => user !== appUser);
    this.userService.deleteUser(appUser).subscribe();
  }

  async delay(ms: number) {
    await new Promise(resolve => setTimeout(() => resolve(), ms)).then(() => this.getNumberOfUsers());
  }

  getNumberOfUsers() {
    return this.userService.getUsers().subscribe(i => this.numberOfUsers = i.length);
  }




}

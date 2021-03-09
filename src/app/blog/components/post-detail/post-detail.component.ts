import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Location } from '@angular/common';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MessageService } from 'primeng/api';
import { BlogService } from 'src/app/shared/services/blog.service';

import { PostUser } from 'src/app/shared/models/post-user';
import { UserComment } from 'src/app/shared/models/UserComment';

@Component({
  selector: 'app-post-detail',
  templateUrl: './post-detail.component.html',
  styleUrls: ['./post-detail.component.scss']
})
export class PostDetailComponent implements OnInit {
	public now: Date = new Date();
	public commentForm: FormGroup;
	private emailPattern = '^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$';

  public blogs: PostUser[]; // @Ghislain: to List a topics
  public blog: PostUser;
  public selectedTopic: PostUser;

  constructor(
    private router: Router,
    private messageService: MessageService, // Fun to use TOAST for  i.e. Comment
    private activatedRoute: ActivatedRoute, // @Idrice Comments this?
    private location: Location, // A service that applications can use to interact with a browser's URL
    private blogService: BlogService) {
    setInterval(() => {
      this.now = new Date();
    }, 1);
    }

    // convenience getter for easy access to form fields
  get author() { return this.commentForm.get('author'); }
  get msg() { return this.commentForm.get('msg'); }
  get email() { return this.commentForm.get('email'); }

  ngOnInit(): void {
  	this.commentForm = new FormGroup({
      author: new FormControl('', [
        Validators.required,
        Validators.minLength(4),
      ]),
      email: new FormControl(''), // We don t need anymore --> Angular provide built-in validator
      msg: new FormControl('', [
        Validators.required,
        Validators.minLength(5)])
    }
    );
  }

  postYourComment(theData) {
    const message = theData.msg;
    const author = theData.author;

    // @Idrice: this is how to create a object of type Comment
    const commentObject: UserComment = {
      author: author,
      createdDate: this.now,
      id:  + 1,
      msg: message
    };

    // here is to pust the comment into the comments array
    this.selectedTopic.comments.push(commentObject);


    // Tell the serice to update the topic in Server due to added Comments
    // @Idrice: we have to call subscribe() here to fire the method
   // this.blogService.updateTopic(this.selectedTopic).subscribe();

    this.messageService.add({
      severity: 'success', summary: 'Commentaire ajoute',
      detail: author + ' Says ' + message
    }); // this is the pop message to confirm the comment send

    this.commentForm.reset(); // Clean the Form
  }

}

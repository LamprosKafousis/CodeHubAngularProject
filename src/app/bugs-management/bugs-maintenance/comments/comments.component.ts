import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { PostBugsService } from 'src/app/services/post-bugs.service';
import { Bug } from 'src/app/app.component';

@Component({
  selector: 'app-comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.scss']
})
export class CommentsComponent implements OnInit {
  commentForm: FormGroup;
  public comments: Comment[];

  constructor(private postBugsService: PostBugsService) { }

  ngOnInit() {
    this.commentForm = new FormGroup({
      title: new FormControl('', null), // from input
      description: new FormControl('', null), // from input
      priority: new FormControl('', null), // from input
      // reporter: new FormControl('', null),
      // status: new FormControl('', null),
      commentsList: new FormControl('', null), // from input
      id:  new FormControl('', null),
      reporter: new FormControl('', Validators.required),
      // description: new FormControl('', Validators.required),
    });
  }

  formSubmit() {
    this.postBug(this.commentForm.value);
  }

  postBug(newComment: Bug) {
    this.postBugsService.postBugs(newComment).subscribe();
  }

}

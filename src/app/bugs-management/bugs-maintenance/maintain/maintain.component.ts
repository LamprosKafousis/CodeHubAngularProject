import { Component, OnInit } from '@angular/core';
import { PostBugsService } from './../../../services/post-bugs.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Bug, BugsList } from './../../../app.component';
import { GetBugsService } from 'src/app/services/get-bugs.service';

@Component({
  selector: 'app-maintain',
  templateUrl: './maintain.component.html',
  styleUrls: ['./maintain.component.scss']
})
export class MaintainComponent implements OnInit {
  myForm: FormGroup;
  public bugs: BugsList[];

  constructor(private postBugsService: PostBugsService,
              private getBugsService: GetBugsService) { }

  ngOnInit() {
    this.myForm = new FormGroup({
      title: new FormControl('', Validators.required),
      description: new FormControl('', Validators.required),
      priority: new FormControl('', Validators.required),
      reporter: new FormControl('', Validators.required),
      status: new FormControl('', Validators.required),
      commentsList: new FormControl('', null)
    });
  }

  formSubmit(){
    this.postBug(this.myForm.value);
  }

  postBug(bug: Bug) {
    this.postBugsService.postBugs(bug).subscribe();
  }

}

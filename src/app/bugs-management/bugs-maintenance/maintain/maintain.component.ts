import { Component, OnInit } from '@angular/core';
import { PostBugsService } from './../../../services/post-bugs.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Bug, BugsList } from './../../../app.component';
import { HttpParams } from '@angular/common/http';
import { GetBugsByIdService } from 'src/app/services/get-bugs-by-id.service';
import { PutBugsService } from 'src/app/services/put-bugs.service';
import { identifierModuleUrl } from '@angular/compiler';

@Component({
  selector: 'app-maintain',
  templateUrl: './maintain.component.html',
  styleUrls: ['./maintain.component.scss']
})
export class MaintainComponent implements OnInit {
  maintainForm: FormGroup;
  bugId: string;
  retrievedBug: BugsList;
  executionMode =  0; // 1 = edit bug, 0 = edit bug

  constructor(private postBugsService: PostBugsService,
              private getBugsByIdService: GetBugsByIdService,
              private putBugsService: PutBugsService) { }

  ngOnInit() {
    this.maintainForm = new FormGroup({
      title: new FormControl('', Validators.required),
      description: new FormControl('', Validators.required),
      priority: new FormControl('', Validators.required),
      reporter: new FormControl('', Validators.required),
      status: new FormControl('', Validators.required),
      id: new FormControl('', Validators.required)
      // commentsList: new FormControl('', null)
    });

    this.bugId = this.getParamValueQueryString('id');
    if (this.bugId) {
      this.executionMode = 1;
      this.getBugsByIdService.getBugsById(this.bugId).subscribe((bug: BugsList) =>
      { this.retrievedBug = bug;
        this.fillEditBugForm(this.retrievedBug);
      });
    }
  }

  fillEditBugForm(retrievedBug: BugsList){
    const {title, description, priority, reporter, status, id} = this.maintainForm.controls;

    console.log(retrievedBug);
    title.setValue(retrievedBug.title);
    description.setValue(retrievedBug.description);
    priority.setValue(String(retrievedBug.priority));
    reporter.setValue(retrievedBug.reporter);
    status.setValue(retrievedBug.status);
    id.setValue(retrievedBug.id);
  }

  formSubmit() {
    if (this.executionMode === 1) {
      this.putBug(this.maintainForm.value);
    }
    else {
      this.postBug(this.maintainForm.value);
    }
  }

  putBug(newBug: Bug) {
    console.log('putBug data:', newBug );
    this.putBugsService.putBugs(newBug).subscribe();
  }

  postBug(newBug: Bug) {
    this.postBugsService.postBugs(newBug).subscribe();
  }

  getParamValueQueryString( paramName: string ) {
    const url = window.location.href;
    let paramValue;
    if (url.includes('?')) {
      const httpParams = new HttpParams({ fromString: url.split('?')[1] });
      paramValue = httpParams.get(paramName);
    }
    console.log(paramValue);
    return paramValue;
  }
}

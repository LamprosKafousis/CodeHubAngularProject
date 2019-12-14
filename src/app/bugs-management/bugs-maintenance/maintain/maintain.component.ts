import { Component, OnInit } from '@angular/core';
import { PostBugsService } from './../../../services/post-bugs.service';
import { FormGroup, FormControl, Validators, FormArray } from '@angular/forms';
import { Bug } from './../../../app.component';
import { HttpParams } from '@angular/common/http';
import { GetBugsByIdService } from 'src/app/services/get-bugs-by-id.service';
import { PutBugsService } from 'src/app/services/put-bugs.service';
import { identifierModuleUrl } from '@angular/compiler';
import { tap } from 'rxjs/operators';
import { Router } from '@angular/router';

@Component({
  selector: 'app-maintain',
  templateUrl: './maintain.component.html',
  styleUrls: ['./maintain.component.scss']
})
export class MaintainComponent implements OnInit {
  maintainForm: FormGroup;
  bugId: string;
  retrievedBug: Bug;
  executionMode =  0; // 1 = edit bug, 0 = edit bug

  constructor(private postBugsService: PostBugsService,
              private getBugsByIdService: GetBugsByIdService,
              private putBugsService: PutBugsService,
              private router: Router) { }

  ngOnInit() {
    this.maintainForm = new FormGroup({
      title: new FormControl('', Validators.required),
      description: new FormControl('', Validators.required),
      priority: new FormControl('', Validators.required),
      reporter: new FormControl('', Validators.required),
      status: new FormControl('', Validators.required),
      id: new FormControl('', Validators.required),
      commentsList: new FormArray([
        new FormGroup({
          reporter: new FormControl(),
          comments: new FormControl()
        })
      ])
    });

    this.bugId = this.getParamValueQueryString('id');
    if (this.bugId) {
      this.executionMode = 1;
      this.getBugsByIdService.getBugsById(this.bugId).subscribe((bug: Bug) =>
      {
        this.retrievedBug = bug;
        console.log('Retrieved Bug:', this.retrievedBug);
        this.fillEditBugForm(this.retrievedBug);
      });
    }
  }

  fillEditBugForm(retrievedBug: Bug) {
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

    const actionToInvoke = this.executionMode === 1
    ? this.putBugsService.putBugs(this.maintainForm.value)
    : this.postBugsService.postBugs(this.maintainForm.value);


    actionToInvoke.pipe(
      tap(() => this.router.navigate(['']))
    ).subscribe();

    // if (this.executionMode === 1) {
    //   this.putBug(this.maintainForm.value);
    // }
    // else {
    //   this.postBug(this.maintainForm.value);
    // }
  }

  // putBug(newBug: Bug) {
  //   console.log('putBug data:', newBug );
  //   this.putBugsService.putBugs(newBug).pipe(
  //     tap(() => this.router.navigate(['']))
  //   ).subscribe();
  // }

  // postBug(newBug: Bug) {
  //   this.postBugsService.postBugs(newBug).pipe(
  //     tap(() => this.router.navigate(['']))
  //   ).subscribe();
  // }

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

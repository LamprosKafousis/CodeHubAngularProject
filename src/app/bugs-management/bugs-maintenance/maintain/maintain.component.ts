import { Component, OnInit } from '@angular/core';
import { PostBugsService } from './../../../services/post-bugs.service';
import { FormGroup, FormControl, Validators, FormArray, FormBuilder } from '@angular/forms';
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
  executionMode = 0; // 0 = new bug, 1 = edit bug, 2 = new comment
  newComment = false;
  commentsMode = false;
  reporters = ["QA", "PO", "DEV"];
  statuses = ["Ready for test", "Done", "Rejected"];
  status;
  reporter;
  priority;

  constructor(private postBugsService: PostBugsService,
    private getBugsByIdService: GetBugsByIdService,
    private putBugsService: PutBugsService,
    private router: Router,
    private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.maintainForm = this.formBuilder.group({
      title: new FormControl('', Validators.required),
      description: new FormControl('', Validators.required),
      priority: new FormControl('', Validators.required),
      reporter: new FormControl('', Validators.required),
      status: new FormControl('', Validators.required),
      id: new FormControl('', Validators.required),
      comments: this.formBuilder.array([
        this.formBuilder.group({
          reporter: ['DEV', null],
          description: ['Enter your comment here!', null]
        })
      ])
    });

    this.bugId = this.getParamValueQueryString('id');
    if (this.bugId) {
      if (this.router.url.includes('bugs/comments/new')) {
        this.executionMode = 2;
        this.commentsMode = true;
      } else {
        this.executionMode = 1;
      }

      this.getBugsByIdService.getBugsById(this.bugId).subscribe((bug: Bug) => {
        this.retrievedBug = bug;
        this.fillEditBugForm(this.retrievedBug);
      });
    }
  }

  getControls(frmGrp: FormGroup, key: string) {
    return (frmGrp.controls[key] as FormArray).controls;
  }

  fillEditBugForm(retrievedBug: Bug) {
    const { title, description, priority, reporter, status, id } = this.maintainForm.controls;

    //console.log(retrievedBug);
    title.setValue(retrievedBug.title);
    description.setValue(retrievedBug.description);
    priority.setValue(String(retrievedBug.priority));
    reporter.setValue(retrievedBug.reporter);
    status.setValue(retrievedBug.status);
    id.setValue(retrievedBug.id);
    if (retrievedBug.comments != null) {
      retrievedBug.comments.forEach((item) => {
        this.addComments(false, item.reporter, item.description);
      });
    }
  }

  addComments(addbuttonPressed: boolean, commentReporter?: string, commentDescription?: string) {
    console.log('RetrieveExistingComments');
    //const commentsArray = (this.maintainForm.controls.comments as FormArray);

    if (addbuttonPressed) {
      let newCommentsgroup: FormGroup = this.formBuilder.group({
        reporter: ['DEV', null],
        description: ['Enter your comment here!', null]
      });

      //commentsArray.insert(0, newCommentsgroup);
      (this.maintainForm.controls.comments as FormArray).insert(0, newCommentsgroup);
    } else {
      let newCommentsgroup: FormGroup = this.formBuilder.group({
        //reporter: [commentReporter, null],
        reporter: [{ value: commentReporter, disabled: true }, null],
        //description: [commentDescription, null]
        description: [{ value: commentDescription, disabled: true }, null]
      });
      //commentsArray.push(newCommentsgroup);
      (this.maintainForm.controls.comments as FormArray).push(newCommentsgroup);
      //const {reporter, description} = newCommentsgroup.controls;
      //reporter.enable();
      //description.enable();
      //reporter.setValue('DEV');
      //description.setValue('Enter your comment here!');
    }
  }

  // formSubmit() {
  //   const actionToInvoke = this.executionMode === 1
  //   ? this.putBugsService.putBugs(this.maintainForm.getRawValue())
  //   : this.postBugsService.postBugs(this.maintainForm.getRawValue());

  //   actionToInvoke.pipe(
  //     tap(() => this.router.navigate(['']))
  //   ).subscribe();
  // }


  formSubmit() {
    // actionToInvoke.pipe(
    //   tap(() => this.router.navigate(['']))
    // ).subscribe();
    if (this.executionMode === 0) {
      this.postBugsService.postBugs(this.maintainForm.getRawValue()).pipe(
        tap(() => this.router.navigate(['']))
      ).subscribe();
    }

    if (this.executionMode === 1) {
      this.putBugsService.putBugs(this.maintainForm.getRawValue()).pipe(
        tap(() => this.router.navigate(['']))
      ).subscribe();
    }

    if (this.executionMode === 2) {
      this.putBugsService.putBugs(this.maintainForm.getRawValue()).subscribe();
      //disable all comments
      this.disableInputs();
    }
  }

  disableInputs() {
    (this.maintainForm.get('comments') as FormArray)
      .controls
      .forEach(control => {
        control.disable();
      });
  }

  getParamValueQueryString(paramName: string) {
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

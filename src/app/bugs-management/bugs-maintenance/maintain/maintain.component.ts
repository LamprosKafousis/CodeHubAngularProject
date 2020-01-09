import { Component, OnInit } from '@angular/core';
import { PostBugsService } from './../../../services/post-bugs.service';
import { FormGroup, FormControl, Validators, FormArray, FormBuilder } from '@angular/forms';
import { Bug } from './../../../app.component';
import { HttpParams } from '@angular/common/http';
import { GetBugsByIdService } from 'src/app/services/get-bugs-by-id.service';
import { PutBugsService } from 'src/app/services/put-bugs.service';
import { tap } from 'rxjs/operators';
import { Router } from '@angular/router';
import { ExecutionMode } from '../../../common/common.enum';

@Component({
  selector: 'app-maintain',
  templateUrl: './maintain.component.html',
  styleUrls: ['./maintain.component.scss']
})

export class MaintainComponent implements OnInit {
  maintainForm: FormGroup;
  bugId: string;
  retrievedBug: Bug;
  executionMode = ExecutionMode.NewBug;
  newComment = false;
  commentsMode = false;
  reporters = ['QA', 'PO', 'DEV'];
  statuses = ['Ready for test', 'Done', 'Rejected'];
  submitBugAlreadyPressed = false;
  status;
  reporter;
  priority;

  constructor(private postBugsService: PostBugsService,
              private getBugsByIdService: GetBugsByIdService,
              private putBugsService: PutBugsService,
              private router: Router,
              private formBuilder: FormBuilder) { }

  ngOnInit() {

    this.bugId = this.getParamValueQueryString('id');
    if (this.bugId) {
      if (this.router.url.includes('bugs/comments/new')) {
        this.executionMode = ExecutionMode.NewComment;
        this.commentsMode = true;
        this.initializeForm();
      } else {
        this.executionMode = ExecutionMode.EditBug;
        this.initializeForm();
      }

      this.getBugsByIdService.getBugsById(this.bugId).subscribe((bug: Bug) => {
        this.retrievedBug = bug;
        this.fillEditBugForm(this.retrievedBug);
      });
    } else {
      this.initializeForm();
    }

    this.maintainForm.controls.reporter.valueChanges.subscribe( (value: string) => {
      if (value === 'QA') {
        this.maintainForm.controls.status.setValidators(Validators.required);
      } else {
        this.maintainForm.controls.status.clearValidators(); }
      this.maintainForm.controls.status.updateValueAndValidity() ; });
}

  initializeForm() {

    switch (this.executionMode) {
     case ExecutionMode.NewBug: {
      this.maintainForm = this.formBuilder.group({
        title: new FormControl('', Validators.required),
        description: new FormControl('', Validators.required),
        priority: new FormControl('', Validators.required),
        reporter: new FormControl('', Validators.required),
        status: new FormControl('', null),
        id: new FormControl('', null),
      });
      console.log(this.maintainForm.get('reporter').value);
      if (this.maintainForm.get('reporter').value === 'QA')
      {
        this.maintainForm.get('status').setValidators(Validators.required);
      }
       else {
         this.maintainForm.get('status').clearValidators();
      }
      this.maintainForm.get('status').updateValueAndValidity();
      break;
     }
     case ExecutionMode.EditBug: {
      this.maintainForm = this.formBuilder.group({
        title: new FormControl('', Validators.required),
        description: new FormControl('', Validators.required),
        priority: new FormControl('', Validators.required),
        reporter: new FormControl('', Validators.required),
        status: new FormControl('', Validators.required),
        id: new FormControl('', null),
      });
      break;
     }
     default: { // ExecutionMode.Newcomment
      this.maintainForm = this.formBuilder.group({
        title: new FormControl({ value: '', disabled: true }, null),
        description: new FormControl({ value: '', disabled: true }, null),
        priority: new FormControl({ value: '', disabled: true }, null),
        reporter: new FormControl({ value: '', disabled: true }, null),
        status: new FormControl({ value: '', disabled: true }, null),
        id: new FormControl({ value: '', disabled: true }, null),
        comments: this.formBuilder.array([
          this.formBuilder.group({
            reporter: ['Unknown DEV', null],
            description: ['Enter your comment here!', null]
          })
        ])
      });
      break;
     }
    }
  }

  getControls(frmGrp: FormGroup, key: string) {
    return (frmGrp.controls[key] as FormArray).controls;
  }

  fillEditBugForm(retrievedBug: Bug) {
    const { title, description, priority, reporter, status, id } = this.maintainForm.controls;

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

    if (addbuttonPressed) {
      let newCommentsgroup: FormGroup = this.formBuilder.group({
        reporter: ['Unknown DEV', Validators.required],
        description: ['Enter your comment here!', Validators.required]
      });
      (this.maintainForm.controls.comments as FormArray).insert(0, newCommentsgroup);
    } else {
      let newCommentsgroup: FormGroup = this.formBuilder.group({
        reporter: [{ value: commentReporter, disabled: true }, null],
        description: [{ value: commentDescription, disabled: true }, null]
      });
      (this.maintainForm.controls.comments as FormArray).push(newCommentsgroup);
    }
  }

  formSubmit() {

  switch (this.executionMode) {
    case ExecutionMode.NewBug: {
      this.postBugsService.postBugs(this.maintainForm.getRawValue())
      .pipe(tap(() => this.router.navigate([''])))
      .subscribe();
      this.submitBugAlreadyPressed = true;
     break;
    }
   case ExecutionMode.EditBug: {
      this.putBugsService.putBugs(this.maintainForm.getRawValue())
      .pipe(tap(() => this.router.navigate([''])))
      .subscribe();
      this.submitBugAlreadyPressed = true;
    break;
   }
   default: { // ExecutionMode.Newcomment
      this.putBugsService.putBugs(this.maintainForm.getRawValue())
      .subscribe();
      this.disableCommentInputs();
      break;
   }
  }
  }

  disableCommentInputs() {
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

import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormArray } from '@angular/forms';
import { GetBugsService } from 'src/app/services/get-bugs.service';
import { Bug } from 'src/app/app.component';
@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {
  searchForm: FormGroup;
  priorities = [1,2,3];
  reporters = ['QA', 'PO', 'DEV'];
  statuses = ['Ready for test', 'Done', 'Rejected'];
  constructor(private getBugsService: GetBugsService,) {

   }
   public bugs: Bug[];
   headElements = ['title', 'priority', 'reporter', 'createdAt', 'status'];
   currentPage = 0;
 res;
 totalPages;
  ngOnInit() {
    this.searchForm = new FormGroup({
      title: new FormControl(''),
      priority: new FormControl(''),
      reporter: new FormControl(''),
      status: new FormControl(''),
    });
  }

  search() {

    this.getBugsService.getBugs('createdAt', 0, null, null, this.searchForm.controls['priority'].value, this.searchForm.controls['reporter'].value, this.searchForm.controls['status'].value, null)
    .subscribe( res => {
      this.bugs = res.body as Bug[];
      this.totalPages = res.headers.get('Totalpages');
      console.log(this.bugs);
    })}

}

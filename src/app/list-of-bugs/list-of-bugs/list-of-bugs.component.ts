import { Component, OnInit } from '@angular/core';
import { GetBugsService } from 'src/app/services/get-bugs.service';
import { GetBugsSortingPagingService } from 'src/app/services/get-bugs-sorting-paging.service';

@Component({
  selector: 'app-list-of-bugs',
  templateUrl: './list-of-bugs.component.html',
  styleUrls: ['./list-of-bugs.component.scss']
})
export class ListOfBugsComponent implements OnInit {

  constructor(private getBugsService: GetBugsService,
              private getBugsSortingPagingService: GetBugsSortingPagingService) { }
  // bug: Array<string>;

  ngOnInit() {
    this.getBugsService.getBugs().subscribe((data) => {console.log(data); }) ;
    this.getBugsSortingPagingService.getBugsSortingPaging().subscribe((data) => {console.log(data)}) ;
  }
  // this.getBugsSortedService.getBugsSorted().subscribe((data) => {console.log(data)}) ;
}



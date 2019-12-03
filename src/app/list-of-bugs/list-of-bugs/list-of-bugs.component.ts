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
  public bugs: Bug[];
  headElements = ['       TITLE       ', 'PRIORITY', 'REPORTER', '  DATE CREATED  ', '   STATUS  '];
  ngOnInit() {

    this.getBugsService.getBugs().subscribe((data) => {data.map((it) => console.log(it.status + it.title)) ;}) ;
    this.getBugsSortingPagingService.getBugsSortingPaging().subscribe((bugs: Bug[]) => { for(let bug of bugs) { console.log(bug.priority);} this.bugs = bugs; for(let bug of this.bugs) {console.log(bug.title);}});
    this.getBugsSortingPagingService.getBugsSortingPaging().subscribe((bugs: Bug[]) => {this.bugs = bugs; for(let bug of this.bugs) {console.log(bug.reporter);}});





  // this.getBugsSortedService.getBugsSorted().subscribe((data) => {console.log(data)}) ;
}
}
interface Bug {
  title: string;
  priority: number;
  reporter: string;
  createdAt: Date;
  status: string;
}






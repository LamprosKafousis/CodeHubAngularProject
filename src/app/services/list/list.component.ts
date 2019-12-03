import { Component, OnInit } from '@angular/core';
import { GetBugsService } from '../../services/getbugs.service';
import { GetBugsSortedService } from '../../services/getbugssorted.service';
@Component({
  selector: 'app-list-bugs',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {

  constructor(private getBugsService: GetBugsService,
              private getBugsSortedService: GetBugsSortedService) { }
  bug: Array<string>;

  ngOnInit() {
    this.getBugsService.getBugs().subscribe((data) => {console.log(data)}) ;
    this.getBugsSortedService.getBugsSorted().subscribe((data) => {console.log(data)}) ;
}
}

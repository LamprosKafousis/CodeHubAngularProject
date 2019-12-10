import { Component, OnInit } from '@angular/core';
import { GetBugsService } from './../../../services/get-bugs.service';
import { BugsList } from 'src/app/app.component';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})

export class ListComponent implements OnInit {

  constructor(private getBugsService: GetBugsService) { }
  public bugs: BugsList[];
  headElements = ['title', 'priority', 'reporter', 'createdAt', 'status'];

  ngOnInit() {
    this.loadList();
  }

  loadList(){
    this.getBugsService.getBugs(null, null, null, null, null, null, null, null).subscribe(
      (bugs: BugsList[]) => {this.bugs = bugs;});
  }

  sorting( sortHead: string) {
    this.getBugsService.getBugs(sortHead, null, null, null, null, null, null, null).subscribe(
      (bugs: BugsList[]) => {this.bugs = bugs;});
  }

}





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
  currentPage = 0;
  
  ngOnInit() {
    this.loadList();
  }

  loadList(){
  this.getBugsService.getBugs('createdAt', 0, null, null, null, null, null, null).subscribe(
    (bugs: Bug[]) => {this.bugs = bugs;});
  }

  sorting( sortHead: string) {
    this.currentPage = 0;
    this.getBugsService.getBugs(sortHead, 0, null, null, null, null, null, null).subscribe(
      (bugs: Bug[]) => {this.bugs = bugs;});
  }

  paging( goTo: string) {
    this.currentPage = goTo === 'next'? this.currentPage+1 : this.currentPage-1 ;
    this.getBugsService.getBugs(null, this.currentPage, null, null, null, null, null, null).subscribe(
      (bugs: Bug[]) => {this.bugs = bugs;});
  }

}





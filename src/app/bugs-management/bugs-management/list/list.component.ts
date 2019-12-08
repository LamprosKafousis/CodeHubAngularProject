import { Component, OnInit } from '@angular/core';
import { GetBugsService } from 'src/app/services/get-bugs.service';
@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})

export class ListComponent implements OnInit {

  constructor(private getBugsService: GetBugsService) { }
  public bugs: Bug[];
  headElements = ['title', 'priority', 'reporter', 'createdAt', 'status'];
  ngOnInit() {

  this.getBugsService.getBugs(null, null, null, null, null, null, null, null).subscribe(
    (bugs: Bug[]) => {this.bugs = bugs;});
  }

  sorting( sortHead: string) {
    this.getBugsService.getBugs(sortHead, null, null, null, null, null, null, null).subscribe(
      (bugs: Bug[]) => {this.bugs = bugs;});
  }

}
interface Bug {
  title: string;
  priority: number;
  reporter: string;
  createdAt: Date;
  status: string;
}





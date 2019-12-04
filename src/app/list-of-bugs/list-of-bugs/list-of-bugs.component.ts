import { Component, OnInit } from '@angular/core';
import { GetBugsService } from 'src/app/services/get-bugs.service';
@Component({
  selector: 'app-list-of-bugs',
  templateUrl: './list-of-bugs.component.html',
  styleUrls: ['./list-of-bugs.component.scss']
})

export class ListOfBugsComponent implements OnInit {

  constructor(private getBugsService: GetBugsService) { }
  public bugs: Bug[];
  headElements = ['title', 'priority', 'reporter', 'createdAt', 'status'];
  ngOnInit() {

  this.getBugsService.getBugs(null, null, null, null, null, null, null, null).subscribe(
    (bugs: Bug[]) => {this.bugs = bugs;});
}

sorting( sort: string) {
  this.getBugsService.getBugs(sort, null, null, null, null, null, null, null).subscribe(
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






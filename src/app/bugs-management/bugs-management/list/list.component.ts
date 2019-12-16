import { Component, OnInit } from '@angular/core';
import { GetBugsService } from './../../../services/get-bugs.service';
import { Bug } from 'src/app/app.component';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})

export class ListComponent implements OnInit {

  constructor(private getBugsService: GetBugsService, private http: HttpClient) { }
  public bugs: Bug[];
  headElements = ['title', 'priority', 'reporter', 'createdAt', 'status'];
  currentPage = 0;
res;
totalPages;
//headers: Headers;
  ngOnInit() {
    this.loadList();
  }

  loadList(){
    this.getBugsService.getBugs('createdAt', 0, null, null, null, null, null, null)
    .subscribe( res => {
      this.bugs = res.body as Bug[];
      this.totalPages = res.headers.get('Totalpages');
    })}

  sorting( sortHead: string) {
    this.currentPage = 0;
    this.getBugsService.getBugs(sortHead, 0, null, null, null, null, null, null).subscribe(
      res => { this.bugs = res.body as Bug[];
        this.totalPages = res.headers.get('Totalpages');})}


  paging( goTo: string) {
    this.currentPage = goTo === 'next'? this.currentPage+1 : this.currentPage-1 ;
    this.getBugsService.getBugs(null, this.currentPage, null, null, null, null, null, null).subscribe(
      res => { this.bugs = res.body as Bug[];
        this.totalPages = res.headers.get('Totalpages');})}

}





import { Component, OnInit, ViewChild } from '@angular/core';
import { GetBugsService } from './../../../services/get-bugs.service';
import { DeleteBugsService } from 'src/app/services/delete-bugs.service';
import { FormGroup, FormControl } from '@angular/forms';
import { MatSort, MatTableDataSource } from '@angular/material';
import { Bug } from 'src/app/common/common';
@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})

export class ListComponent implements OnInit {

  constructor(private getBugsService: GetBugsService, private deleteBugsService: DeleteBugsService) { }
  sort: MatSort;
  dataSource: MatTableDataSource<Bug>;
  displayedColumns: string[] = ['title', 'priority', 'reporter', 'createdAt', 'status', 'edit_action', 'comment_action', 'delete_action' ];
  headElements = ['title', 'priority', 'reporter', 'createdAt', 'status'];
  currentPage = 0;
  res;
  totalPages;
  searchForm: FormGroup;
  priorities = [1, 2, 3];
  reporters = ['QA', 'PO', 'DEV'];
  statuses = ['Ready for test', 'Done', 'Rejected'];
  sortHead;
  title;
  priority;
  reporter;
  status;

  ngOnInit() {
    this.loadList();

    this.searchForm = new FormGroup({
      title: new FormControl(''),
      priority: new FormControl(''),
      reporter: new FormControl(''),
      status: new FormControl(''),
    });
  }

  loadList() {
    this.getBugsService.getBugs(null, this.currentPage, null, this.title,
      this.priority,
      this.reporter,
     this.status, null)
    .subscribe( res => this.getBugsList(res)); }

  sorting( event: any) {
    this.sortHead = event.active;
    this.currentPage = 0 ;
    this.getBugsService.getBugs(event.active, 0, null,
      this.title,
      this.priority,
      this.reporter,
      this.status,
      null)
    .subscribe(  res => this.getBugsList(res)); }

  paging( goTo: string) {
    this.currentPage = goTo === 'next' ? this.currentPage + 1 : this.currentPage - 1 ;
    this.loadList(); }

  delete( bugId: string) {
    if ( confirm('Are you sure to delete bug with id: ' + bugId)) {
    this.deleteBugsService.deleteBugs(bugId).subscribe( () => this.loadList());
    }
  }

  getBugsList( res ) {
    this.totalPages = res.headers.get('Totalpages');
    this.dataSource = new MatTableDataSource(res.body);
    this.dataSource.sort = this.sort;
  }

  deleteFilters() {
    const {title, priority, reporter, status} = this.searchForm.controls;
    title.setValue(null);
    priority.setValue(null);
    reporter.setValue(null);
    status.setValue(null);
    this.currentPage = 0 ;
    this.loadList();
  }

  search() {
    this.currentPage = 0 ;
    this.title = this.searchForm.controls['title'].value;
    this.priority = this.searchForm.controls['priority'].value;
    this.reporter = this.searchForm.controls['reporter'].value;
    this.status =  this.searchForm.controls['status'].value;
    this.loadList();
    }

  }

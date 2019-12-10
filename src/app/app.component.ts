import { Component, OnInit } from '@angular/core';
// import { MyService } from './my.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})


export class AppComponent {
}

export interface BugsList {
  title: string;
  priority: number;
  reporter: string;
  createdAt: Date;
  status: string;
}


export interface Bug {
  title: string;
  description: string;
  priority: number;
  reporter: string;
  // createdAt: Date;
  status: string;
  commentsList: Comment[];
}

export interface Comment {
  id: string;
  reporter: string;
  description: string;
}

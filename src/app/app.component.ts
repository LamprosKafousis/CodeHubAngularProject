import { Component, OnInit } from '@angular/core';
// import { MyService } from './my.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {
  title = "Bugs Management Application";
  footer = "Created by Team A"
}

export interface Bug {
  title: string;
  description: string;
  priority: number;
  reporter: string;
  createdAt: Date;
  id: string;
  status: string;
  comments: Comment[];
}

export interface Comment {
  id: string;
  reporter: string;
  description: string;
}

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Bug } from '../app.component';

@Injectable({
  providedIn: 'root'
})
export class PostBugsService {
  private readonly endpoint = 'https://bug-report-system-server.herokuapp.com/bugs';

  constructor(private http: HttpClient) { }

  postBugs(newBug: Bug): Observable<Bug> {
    return this.http.post<Bug>(this.endpoint, newBug);
  }

}

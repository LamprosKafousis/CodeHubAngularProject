import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Bug } from '../app.component';

@Injectable({
  providedIn: 'root'
})
export class PutBugsService {

  constructor(private http: HttpClient) { }

  putBugs(editedBug: Bug): Observable<any> {
    const endpoint = 'https://bug-report-system-server.herokuapp.com/bugs/' + editedBug.id;

    return this.http.put<Bug>(endpoint, editedBug);
  }
}

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Bug } from '../common/common';

@Injectable({
  providedIn: 'root'
})
export class DeleteBugsService {

  constructor(private http: HttpClient) { }

  deleteBugs(bugId: string): Observable<any> {

    const endpoint = 'https://bug-report-system-server.herokuapp.com/bugs/' + bugId;

    return this.http.delete<Bug>(endpoint);
  }
}

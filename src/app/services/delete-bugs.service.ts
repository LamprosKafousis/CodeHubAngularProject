import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Bug } from '../app.component';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DeleteBugsService {

  constructor(private http: HttpClient) { }

  deleteBugs(bugId: string): Observable<any> {

    console.log('delete', bugId);
    const endpoint = 'https://bug-report-system-server.herokuapp.com/bugs/' + bugId;

    return this.http.delete<Bug>(endpoint);
  }
}

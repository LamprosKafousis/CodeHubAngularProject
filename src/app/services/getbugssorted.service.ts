import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GetBugsSortedService {

  private readonly endpoint
  = 'https://bug-report-system-server.herokuapp.com/bugs?sort=title,desc&page=0&size=10&title=bug&priority=1&reporter=QA&status=Done';
  constructor(private http: HttpClient) { }

  getBugsSorted(): Observable<any> {
    return this.http.get(this.endpoint);
   }
}

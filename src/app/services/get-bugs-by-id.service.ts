import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GetBugsByIdService {

  constructor(private http: HttpClient) { }

  getBugsById(id: string): Observable<any> {

    const endpoint = 'https://bug-report-system-server.herokuapp.com/bugs/' + id;

    return this.http.get(endpoint);
  }
}

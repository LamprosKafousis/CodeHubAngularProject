import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GetBugsSortingPagingService {

  //private readonly endpoint = 'https://bug-report-system-server.herokuapp.com/bugs?sort=title,desc&page=0&size=10&title=bug&priority=1&reporter=QA&status=Done';
  private endpoint = 'https://bug-report-system-server.herokuapp.com/bugs?';

  constructor(private http: HttpClient) { }

  getBugsSortingPaging(sort?: string,
                       page?: number,
                       size?: number,
                       title?: string,
                       priority?: number,
                       reporter?: string,
                       status?: string): Observable<any> {
    if (sort !== '' && sort != null) {
      this.endpoint = this.endpoint + 'sort=' + sort;
    }

    return this.http.get(this.endpoint);
   }
}

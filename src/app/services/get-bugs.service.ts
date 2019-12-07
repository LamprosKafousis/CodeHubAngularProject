import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GetBugsService {

  constructor(private http: HttpClient) { }

  private headers = [
    {header: 'title'    , ordering: true},
    {header: 'priority' , ordering: true},
    {header: 'reporter' , ordering: true},
    {header: 'createdAt', ordering: true},
    {header: 'status'   , ordering: true}];

  getBugs(sort?: string,
          page?: number,
          size?: number,
          title?: string,
          priority?: number,
          reporter?: string,
          status?: string,
          createdAt?: Date): Observable<any> {

    let endpoint = 'https://bug-report-system-server.herokuapp.com/bugs?&size=100';

    if (sort != null) {
      endpoint += this.getBugsSorting(sort);
    }

    return this.http.get(endpoint);
  }

  getBugsSorting(sortHead: string): string {
    let sortOrder = 'asc';
    this.headers.forEach(item => {
      if (item.header === sortHead) {
        item.ordering = !item.ordering;
        sortOrder = item.ordering ? 'asc' : 'desc';
      }
    });
    return ('&sort=' + sortHead + ',' +  sortOrder );
  }

}

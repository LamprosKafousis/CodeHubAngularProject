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
  sortHead = 'createdAt';
  ordering = 'desc';
  getBugs(sort?: string,
          page?: number,
          size?: number,
          title?: string,
          priority?: number,
          reporter?: string,
          status?: string,
          createdAt?: Date): Observable<any> {

    let endpoint = 'https://bug-report-system-server.herokuapp.com/bugs?';

    if (sort != null) {
      endpoint += this.getBugsSorting(sort) + '&page=' + 0 ;
    }
    else if (page != null) {
      endpoint += this.getBugsPaging(page);
    }

    return this.http.get(endpoint);
  }

  getBugsSorting(sortHead: string): string {
    const item = this.headers.find(x => x.header === sortHead );
    this.sortHead = sortHead;
    item.ordering = !item.ordering;
    this.ordering = item.ordering ? 'asc' : 'desc';
    return ('&sort=' + this.sortHead + ',' +  this.ordering );
  }

  getBugsPaging(page: number): string {
    return ('&sort=' + this.sortHead + ',' +  this.ordering + '&page=' + page );
  }


}

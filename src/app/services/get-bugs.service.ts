import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GetBugsService {

  //private readonly endpoint = 'https://bug-report-system-server.herokuapp.com/bugs?sort=title,desc&page=0&size=10&title=bug&priority=1&reporter=QA&status=Done';

  constructor(private http: HttpClient) { }
  private sorting = 'asc';
  private previousSort = 'title';
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
      const sorted = this.getBugsSorted(sort);
      endpoint = endpoint + sorted;
    }

    return this.http.get(endpoint);
  }


    getBugsSorted(sort: string): string {

      if (sort === this.previousSort) {
        if (this.sorting === 'desc') {
          this.sorting = 'asc';}
        else {
          this.sorting = 'desc';
        }
      }
      else {
        this.sorting = 'asc';
      }
      this.previousSort = sort;
      return ('&sort=' + sort + ',' + this.sorting);

    }

}

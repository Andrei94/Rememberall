import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {Remark} from '../remark';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {map} from 'rxjs/operators';
import {environment} from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class RemarksListService {

  constructor(private http: HttpClient) {
  }

  getRemarks(): Observable<Remark[]> {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        Authorization: sessionStorage.getItem('Authorization')
      })
    };
    return this.http.get(environment.allRemarksUrl, httpOptions)
      .pipe(map((r: any) => r.remarks as Remark[]));
  }
}

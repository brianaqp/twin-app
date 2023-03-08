import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../environments/environment';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class VesselsService {
  api = environment.api + '/vessels';
  constructor(private readonly http: HttpClient) {}

  get(): Observable<any> {
    return this.http.get<any>(this.api);
  }

  post(id: string, item: any): Observable<any> {
    const body = {
      id: id,
      values: item,
    };
    return this.http.post<any>(this.api, body);
  }
}

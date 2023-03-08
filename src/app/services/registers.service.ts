import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../environments/environment';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class RegistersService {
  api = environment.api + '/registers';
  constructor(private readonly http: HttpClient) {}

  get(): Observable<any> {
    return this.http.get<any>(this.api);
  }

  post(item: string[]): Observable<any> {
    const body = {};
    return this.http.post<any>(this.api, body);
  }
}

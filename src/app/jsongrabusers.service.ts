import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root',
})
export class JsongrabusersService {
  private usersURL = '/assets/data/User.json';
  constructor(private http: HttpClient) {}

  getUsers():Observable<any> {
    return this.http.get(this.usersURL);
  }
}

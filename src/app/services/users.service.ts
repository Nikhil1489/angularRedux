import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  apiUrl = 'https://reqres.in/api/users';

  constructor(private http: HttpClient) { }

  getUsers() {
    return this.http.get<any>(this.apiUrl);
  }
}

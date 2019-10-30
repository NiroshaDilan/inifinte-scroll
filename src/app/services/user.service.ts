import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  BASE_URL = 'http://localhost:8084/api/user-manage';

  constructor(private httpClient: HttpClient) { }

  public getUser(userId: number) {
    return this.httpClient.get(this.BASE_URL + "/" + userId);
  }

  public addUser(user: any) {
    return this.httpClient.post(this.BASE_URL, user);
  }

}

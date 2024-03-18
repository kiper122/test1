import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environments } from 'src/environments/environment';
import { UserRequest, UserResponse } from '../../interfaces/user/user.interface';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UsersApiServiceService {

  private url = environments.BACKEND_URL;
  private api = {users: `${this.url}/users`};
  constructor( private http:HttpClient) { }

  getUsers():Observable<UserResponse[]>{
    return this.http.get<UserResponse[]>(this.api.users);
  }
}

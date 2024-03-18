import { Injectable } from '@angular/core';
import { UserResponse } from '../../interfaces/user/user.interface';
import { LocalStorageService } from '../local-storage/local-storage.service';

@Injectable({
  providedIn: 'root'
})
export class UsersServiceService {
  public _users : UserResponse[] = [];
  private initializedFromLocalStorage = false;
  constructor(
    private localStorageService:LocalStorageService
    ) { }

  get users(): UserResponse[]{
    return this._users;
  }

  set users(users: UserResponse[]) {
    if (!this.initializedFromLocalStorage) {
      this._users = users;
      this.localStorageService.setitem('users', this._users);
    }
  }

  deleteUser(id: number): void {
    if (!this.initializedFromLocalStorage) {
    this.users = this.users.filter((user) => user.id !== id);
    this.localStorageService.setitem('users',this._users);
    }
  }
  addUser(user:UserResponse):void{
    const updateUsers  = [...this.users,user];
    this.users = updateUsers;
    this.localStorageService.setitem('users',this._users);
  }

  updateUser(user:UserResponse):void{
    const index = this._users.findIndex( upUser => upUser.id === user.id);
    this._users.splice(index,1,user);
    this.localStorageService.setitem('users',this._users);
  }

 
}

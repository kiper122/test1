import { Component, EventEmitter, Input, Output } from '@angular/core';
import { UserRequest, UserResponse } from 'src/app/shared/interfaces/user/user.interface';
import { UsersServiceService } from 'src/app/shared/services/UsersService/users-service.service';

@Component({
  selector: 'app-user-card',
  templateUrl: './user-card.component.html',
  styleUrls: ['./user-card.component.scss']
})
export class UserCardComponent {
  constructor(private userService: UsersServiceService) {}
  @Input({ required: true }) user !: UserResponse ;
  @Output()
  deleteUser = new EventEmitter<number>()

  @Output()
  editUser = new EventEmitter<UserResponse>()

  deleteUserCard(id:number) {
    this.deleteUser.emit(id)
  }
  editUserCard(user:UserResponse){
    this.editUser.emit(user)
  }
}

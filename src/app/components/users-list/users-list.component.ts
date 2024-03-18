import { Component, HostListener } from '@angular/core';
import { UserResponse } from 'src/app/shared/interfaces/user/user.interface';
import { UsersApiServiceService } from 'src/app/shared/services/UsersApiService/users-api-service.service';
import { UsersServiceService } from 'src/app/shared/services/UsersService/users-service.service';
import { MatDialog } from '@angular/material/dialog';
import { CreateEditUserComponent } from '../create-edit-user/create-edit-user.component';
import { LocalStorageService } from 'src/app/shared/services/local-storage/local-storage.service';


@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.scss'],
})
export class UsersListComponent {
  public h !: number;
  public w !: number;
  private isEdit = false;
  constructor(
    private userApiService:UsersApiServiceService,
    public userService:UsersServiceService,
    public dialog:MatDialog,
    private localStorageService:LocalStorageService
    ){
    if (typeof window !== 'undefined') {
      this.w = window.innerWidth;
      this.h = window.innerHeight;
    }
      this.userApiService.getUsers().subscribe(data=>{
        const stor = this.localStorageService.getitem<UserResponse[]>('users');
        this.userService.users = (stor === null) ? data: stor;
      })
  }
  @HostListener('window:resize', ['$event'])
  onResize(): void {
    if (typeof window !== 'undefined') {
      this.h = window.innerHeight;
      this.w = window.innerWidth;
    }
  }
  onDeleteUser(id: number): void {
    this.userService.deleteUser(id);
  }
  onEditUser(user:UserResponse): void {
    this.isEdit = true;
    this.dialog.open(CreateEditUserComponent,{
      width:'300px',
      height:'500px',
      data:{isEdit : true ,user:user},
    }).afterClosed().subscribe((data:UserResponse)=>{
      this.userService.updateUser(data);
    })
  }
  addUser(){
    this.isEdit = false;
    this.dialog.open(CreateEditUserComponent,{
      width:'300px',
      height:'500px',
      data:{isEdit : false,user : []}
    }).afterClosed().subscribe((data:UserResponse)=>{
      if(data){
      this.userService.addUser(data);
      }
    })
  }
}

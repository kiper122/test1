import { Component, Inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { UserResponse } from 'src/app/shared/interfaces/user/user.interface';
import { UsersServiceService } from 'src/app/shared/services/UsersService/users-service.service';

@Component({
  selector: 'app-create-edit-user',
  templateUrl: './create-edit-user.component.html',
  styleUrls: ['./create-edit-user.component.scss']
})
export class CreateEditUserComponent {
  public isEdit!: boolean;
  constructor(
    private fb: FormBuilder,
    private userService: UsersServiceService,
    private dialogRef: MatDialogRef<CreateEditUserComponent>,
    @Inject(MAT_DIALOG_DATA) private data: { isEdit: boolean, user: UserResponse }
  ) { }
  public userForm !: FormGroup;

  initpaymentForm(): void {
    this.userForm = this.fb.group({
      name: [(this.data.isEdit) ? this.data.user.name : "", Validators.required],
      email: [((this.data.isEdit)) ? this.data.user.email : "", Validators.email],
      phone: [(this.data.isEdit) ? this.data.user.phone : "", Validators.required],
      userName: [(this.data.isEdit) ? this.data.user.username : "", Validators.required]
    })
  }
  ngOnInit(): void {
    this.isEdit = this.data.isEdit;
    this.initpaymentForm();
  }
  addUser(): void {
    const newUser: UserResponse = {
      id: this.data.isEdit ? this.data.user.id : 1,
      name: this.userForm.get("name")?.value,
      username: this.userForm.get("userName")?.value,
      email: this.userForm.get("email")?.value,
      address: {
        street: "",
        suite: "",
        city: "",
        zipcode: "",
        geo: {
          lat: "",
          lng: ""
        }
      },
      phone: this.userForm.get("phone")?.value,
      website: "",
      company: {
        name: "",
        catchPhrase: "",
        bs: ""
      }
    }
    if (this.userService._users.length > 0 && !this.isEdit) {
      const id = this.userService.users.slice(-1)[0].id;
      newUser.id = id + 1;
    }
    this.dialogRef.close(newUser);
  }
}

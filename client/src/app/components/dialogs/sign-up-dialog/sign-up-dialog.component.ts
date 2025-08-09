import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import {FormBuilder, FormGroup, FormsModule, Validators} from '@angular/forms';
import { CommonModule } from '@angular/common';
import { MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { ReactiveFormsModule } from '@angular/forms';
import { UsersService} from "../../../services/UsersService";
import {IUser} from "../../../models/User";

@Component({
  selector: 'app-sign-up-dialog',
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MatDialogModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule
  ],
  providers: [UsersService],
  templateUrl: './sign-up-dialog.component.html',
  styleUrl: './sign-up-dialog.component.scss'
})
export class SignUpDialogComponent {
  signUpForm: FormGroup;

  constructor(
    public dialogRef: MatDialogRef<SignUpDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private formBuilder: FormBuilder,
    private usersService: UsersService
  ) {
    this.signUpForm = this.formBuilder.group({
      email: ['', Validators.required],
      name: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  onSubmit(): void {
    if (this.signUpForm.valid) {
      let newUser : IUser = this.signUpForm.value;
      newUser.ownedPlaylists = [];
      newUser.followedUsers = [];

      this.usersService.createUser(newUser).then(result => {
        if (result.status === "success") {
          let connectedUser : IUser = result.data;

          this.dialogRef.close(connectedUser);
        }
        else {
          alert(result.message);
        }
      })
    }
  }

  onCancel(): void {
    this.dialogRef.close();
  }
}

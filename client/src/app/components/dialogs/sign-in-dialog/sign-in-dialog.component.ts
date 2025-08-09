import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { FormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { ReactiveFormsModule } from '@angular/forms';
import { UsersService} from "../../../services/UsersService";
import {IUser} from "../../../models/User";

@Component({
  selector: 'app-sign-in-dialog',
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MatDialogModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,

  ],
  templateUrl: './sign-in-dialog.component.html',
  styleUrl: './sign-in-dialog.component.scss',
  providers: [UsersService]
})
export class SignInDialogComponent {
  signInForm: FormGroup;

  constructor(
    public dialogRef: MatDialogRef<SignInDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private formBuilder: FormBuilder,
    private usersService: UsersService
  ) {
    this.signInForm = this.formBuilder.group({
      email: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  onSubmit(): void {
    if (this.signInForm.valid) {
      let user : IUser = this.signInForm.value;
      user.name = '';
      user.followedUsers = [];
      user.ownedPlaylists = [];

      this.usersService.doesUserExist(user).then(result => {
        if (result.status === "success") {
          let connectedUser : IUser = result.data;

          this.dialogRef.close(connectedUser);
        }
        else {
          alert("Invalid email or password");
        }
      })
    }
  }

  onCancel(): void {
    this.dialogRef.close();
  }
}


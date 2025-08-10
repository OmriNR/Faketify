import { Component, Inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import {MatDialogModule, MatDialogRef} from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-guest-dialog',
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MatDialogModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule
  ],
  templateUrl: './guest-dialog.component.html',
  styleUrl: './guest-dialog.component.scss'
})
export class GuestDialogComponent {
    constructor(public dialogRef: MatDialogRef<GuestDialogComponent>) {}

  logInUser(): void{
      this.dialogRef.close('logIn');
  }

  signUpUser(): void{
      this.dialogRef.close('signUp');
  }

  closeDialog(): void{
      this.dialogRef.close();
  }

  protected readonly close = close;
}

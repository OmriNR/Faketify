import { Component, Inject } from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogActions, MatDialogContent, MatDialogRef} from '@angular/material/dialog';

@Component({
  selector: 'app-sign-in-dialog',
  imports: [
    MatDialogActions,
    MatDialogContent
  ],
  templateUrl: './sign-in-dialog.component.html',
  styleUrl: './sign-in-dialog.component.scss'
})
export class SignInDialogComponent {
  constructor(
      public dialogRef: MatDialogRef<SignInDialogComponent>,
      @Inject(MAT_DIALOG_DATA) public data: SimpleDialogData
  ) {}

}

export interface SimpleDialogData {
  title?: string;
  message: string;
  closeButtonText?: string;
}


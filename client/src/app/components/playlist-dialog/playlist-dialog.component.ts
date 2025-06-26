import { Component } from '@angular/core';
import { CommonModule} from "@angular/common";
import {MatDialogActions, MatDialogContent, MatDialogRef} from '@angular/material/dialog';
import { MatFormFieldModule} from "@angular/material/form-field";
import { MatInputModule} from "@angular/material/input";
import { MatButtonModule} from "@angular/material/button";
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from "@angular/forms";

@Component({
  selector: 'app-playlist-dialog',
  imports: [CommonModule, MatFormFieldModule, MatInputModule, MatButtonModule, ReactiveFormsModule, MatDialogActions, MatDialogContent],
  templateUrl: './playlist-dialog.component.html',
  styleUrl: './playlist-dialog.component.scss'
})
export class PlaylistDialogComponent {
  playlistForm: FormGroup;

  constructor(private dialogRef: MatDialogRef<PlaylistDialogComponent>, private fb: FormBuilder) {
    this.playlistForm = this.fb.group({
      name: ['', Validators.required],
      songs: []
    });
  }

  onSubmit(): void {
    if (this.playlistForm.valid) {
      console.log(this.playlistForm.value);
    }
    this.dialogRef.close();
  }

  onCancel(): void {
    this.dialogRef.close();
  }
}

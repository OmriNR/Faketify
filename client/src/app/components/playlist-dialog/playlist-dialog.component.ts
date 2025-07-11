import { Component } from '@angular/core';
import { CommonModule} from "@angular/common";
import {MatDialogActions, MatDialogContent, MatDialogRef} from '@angular/material/dialog';
import { MatFormFieldModule} from "@angular/material/form-field";
import { MatInputModule} from "@angular/material/input";
import { MatButtonModule} from "@angular/material/button";
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from "@angular/forms";
import {MatIcon} from "@angular/material/icon";

@Component({
  selector: 'app-playlist-dialog',
  imports: [CommonModule, MatFormFieldModule, MatInputModule, MatButtonModule, ReactiveFormsModule, MatDialogActions, MatDialogContent, MatIcon],
  templateUrl: './playlist-dialog.component.html',
  styleUrl: './playlist-dialog.component.scss'
})
export class PlaylistDialogComponent {
  playlistForm: FormGroup;
  uploadedFiles: File[] = [];

  constructor(private dialogRef: MatDialogRef<PlaylistDialogComponent>, private fb: FormBuilder) {
    this.playlistForm = this.fb.group({
      name: ['', Validators.required],
    });
  }

  onDragOver(event: DragEvent): void {
    event.preventDefault();
    event.stopPropagation();
    const dropZone = event.target as HTMLElement;
    dropZone.classList.add('drag-over');
  }

  onDragLeave(event: DragEvent): void {
    event.preventDefault();
    event.stopPropagation();
    const dropZone = event.target as HTMLElement;
    dropZone.classList.remove('drag-over');
  }

  onDrop(event: DragEvent): void {
    event.preventDefault();
    event.stopPropagation();
    const dropZone = event.target as HTMLElement;
    dropZone.classList.remove('drag-over');

    const files = Array.from(event.dataTransfer?.files || []);

    if (files.every(file => file.type === 'audio/mpeg')) {
      if (files.length > 0) {
        this.uploadedFiles = [...this.uploadedFiles, ...files];
      }
    }
    else
      alert('Only mpeg files are allowed');
  }

  onSubmit(): void {
    if (this.playlistForm.valid) {
      this.dialogRef.close({
        name: this.playlistForm.value.name,
        files: this.uploadedFiles
      });
    }
  }

  onCancel(): void {
    this.dialogRef.close();
  }
}

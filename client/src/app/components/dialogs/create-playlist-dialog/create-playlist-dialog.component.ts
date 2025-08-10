import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import {FormBuilder, FormGroup, FormsModule, Validators} from '@angular/forms';
import { CommonModule } from '@angular/common';
import { MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { ReactiveFormsModule } from '@angular/forms';
import { CurrentUserService} from "../../../services/CurrentUserService";
import { SongsService} from "../../../services/SongsService";
import { PlaylistService} from "../../../services/PlaylistsService";
import {ISong} from "../../../models/Song";
import {IPlaylist} from "../../../models/Playlist";

@Component({
  selector: 'app-create-playlist-dialog',
  imports: [
      CommonModule,
      FormsModule,
      ReactiveFormsModule,
      MatDialogModule,
      MatFormFieldModule,
      MatInputModule,
      MatButtonModule],
  providers: [SongsService, PlaylistService],
  templateUrl: './create-playlist-dialog.component.html',
  styleUrl: './create-playlist-dialog.component.scss'
})
export class CreatePlaylistDialogComponent {
  createPlaylistForm: FormGroup;
  dragOver = false;
  uploadedFiles: File[] = [];

  constructor(
    public dialogRef: MatDialogRef<CreatePlaylistDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private formBuilder: FormBuilder,
    private currentUserService: CurrentUserService,
    private songsService: SongsService,
    private playlistService: PlaylistService
  ) {
    this.createPlaylistForm = this.formBuilder.group({
      name: ['', Validators.required],
      songs:[[]],
    });
  }

  onDragOver(event: DragEvent): void {
    event.preventDefault();
    event.stopPropagation();
    this.dragOver = true;
  }

  onDragLeave(event: DragEvent): void {
    event.preventDefault();
    event.stopPropagation();
    this.dragOver = false;
  }

  onDrop(event: DragEvent): void {
    event.preventDefault();
    event.stopPropagation();
    this.dragOver = false;

    const files = event.dataTransfer?.files;
    if (files) {
      for (let i = 0; i < files.length; i++) {
        const file = files[i];
        if (file.type === 'audio/mpeg') {
          this.uploadedFiles.push(file);
        }
      }
      this.createPlaylistForm.patchValue({
        songs: this.uploadedFiles
      });
    }
  }

  onSubmit(): void {
    if (this.createPlaylistForm.valid) {
      let formResult = this.createPlaylistForm.value;
      let files: File[] = formResult.songs;
      let playlistName: string = formResult.name;

      let newSongsIds: string[] = [];
      files.forEach(file => {
        let newSong : ISong = {
          id: null,
          name: file.name,
          createdBy: this.currentUserService.getCurrentUser()!.name,
          filePath: "",
          createdAt: new Date(),
        };

        this.songsService.createSong(newSong).then(result => {
          if (result.status === "success") {
            newSongsIds.push(result.data.id);
          }
          else {
            alert(result.message);
          }
        })
      });

      let newPlaylist : IPlaylist = {
        id: null,
        name: playlistName,
        songs: newSongsIds,
        createdBy: this.currentUserService.getCurrentUser()!.name,
        createdAt: new Date(),
        updatedAt: new Date(),
      };

      this.playlistService.createPlaylist(newPlaylist).then(result => {
        if (result.status === "success") {
          this.dialogRef.close(result.data);
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

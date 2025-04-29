import { Component, Input } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { SongsComponent } from '../songs/songs.component';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatSliderModule } from '@angular/material/slider';
import { CommonModule } from '@angular/common';
import { Playlist } from '../../models/Playlist';
import { ISong } from '../../models/Song';

@Component({
  selector: 'playlist-card',
  imports: [MatCardModule, MatButtonModule, MatIconModule, MatSliderModule, SongsComponent, CommonModule],
  templateUrl: './playlist.component.html',
  styleUrls: ['./playlist.component.scss']
})
export class PlaylistComponent {
  @Input() playlist: Playlist | null = null;
  constructor() { }

  onSongSelected(song: ISong): void {
    console.log('Selected song:', song);
  }
}

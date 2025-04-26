import { Component, Input } from '@angular/core';
import { Playlist } from '../models/Playlist';
import { MatCardModule } from '@angular/material/card';
import { SongsComponent } from '../songs/songs.component';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatSliderModule } from '@angular/material/slider';

@Component({
  selector: 'playlist-card',
  imports: [MatCardModule, MatButtonModule, MatIconModule, MatSliderModule, SongsComponent],
  templateUrl: './playlist.component.html',
  styleUrls: ['./playlist.component.scss']
})
export class PlaylistComponent {
  @Input() playlist: Playlist = {
    id: '',
    title: 'Playlist Title',
    description: '',
    songs: [{
      title: 'Song Title',
      artist: 'Artist Name',
      album: 'Album Name',
      dateAdded: new Date(),
      duration: '3:45'
    }, {
      title: 'Song Title 2',
      artist: 'Artist Name 2',
      album: 'Album Name 2',
      dateAdded: new Date(),
      duration: '4:20'
    }],
    createdAt: new Date(),
    updatedAt: new Date(),
    userId: 'asdf;jka;123'
  };

  constructor() { }
}

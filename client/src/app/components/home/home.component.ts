import { Component } from '@angular/core';
import { PlaylistComponent } from '../playlist/playlist.component';
import { MatListModule } from '@angular/material/list';
import { Playlist } from '../../models/Playlist';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-home',
  imports: [PlaylistComponent, MatListModule, CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  playlists : Playlist[] = [
    {
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
    },
    {
      id: '1',
      title: 'My Favorite Songs',
      description: 'A collection of my favorite songs.',
      songs: [
        {
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
        }
      ],
      createdAt: new Date(),
      updatedAt: new Date(),
      userId: 'user123'
    },
    {
      id: '2',
      title: 'Chill Vibes',
      description: 'Perfect for relaxing and unwinding.',
      songs: [
        {
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
        }
      ],
      createdAt: new Date(),
      updatedAt: new Date(),
      userId: 'user456'
    },
    {
      id: '3',
      title: 'Workout Mix',
      description: 'High-energy tracks to keep you motivated.',
      songs: [
        {
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
        }
      ],
      createdAt: new Date(),
      updatedAt: new Date(),
      userId: 'user789'
    }];

    selectedPlaylist: Playlist | null = this.playlists[0];

  selectPlaylist(playlist: Playlist) {
    this.selectedPlaylist = playlist;
  }
}

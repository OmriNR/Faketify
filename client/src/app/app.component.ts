import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ISong } from '../models/Song';
import { SongsGridComponent } from '../components/songs-grid-component';
@Component({
  selector: 'app-root',
  imports: [RouterOutlet, SongsGridComponent],
  template:`
  <songs-grid [songs]="songs"></songs-grid>
  `,
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'client';

  songs: ISong[] = [
    {
      title: 'Song 1',
      artist: 'Artist 1',
      album: 'Album 1',
      dateAdded: new Date('2023-01-01'),
      duration: '3:30'
    },
    {
      title: 'Song 2',
      artist: 'Artist 2',
      album: 'Album 2',
      dateAdded: new Date('2023-02-01'),
      duration: '4:00'
    },
    {
      title: 'Song 3',
      artist: 'Artist 3',
      album: 'Album 3',
      dateAdded: new Date('2023-03-01'),
      duration: '2:45'
    }
  ];
}

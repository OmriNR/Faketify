import {Component, OnInit} from '@angular/core';
import { PlaylistComponent } from '../playlist/playlist.component';
import { MatListModule } from '@angular/material/list';
import { IPlaylist } from '../../models/Playlist';
import { ISong } from '../../models/Song';
import { PlaylistService} from "../../services/PlaylistsService";
import { SongsService} from "../../services/SongsService";
import { CommonModule } from '@angular/common';
import { PlaylistDialogComponent} from "../playlist-dialog/playlist-dialog.component";
import {MatDialog} from "@angular/material/dialog";

@Component({
  selector: 'app-home',
  imports: [PlaylistComponent, MatListModule, CommonModule],
  templateUrl: './home.component.html',
  providers: [PlaylistService, SongsService],
  styleUrl: './home.component.scss'
})
export class HomeComponent implements OnInit {

  constructor(private playlistService: PlaylistService, private songsService: SongsService, private dialog: MatDialog) {
  }


  playlists: IPlaylist[] = []
  selectedPlaylist: IPlaylist | null = this.playlists[0];

  ngOnInit() {
    this.playlistService.getAllPlaylists().then(result => {
      this.playlists = result.data;
    });
  }

  selectPlaylist(playlist: IPlaylist) {
    this.selectedPlaylist = playlist;
  }

  openCreatePlaylistDialog(): void {
    const dialogRef = this.dialog.open(PlaylistDialogComponent, {
      width: '500px'
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        let files : File[] = result.files;
        let songs : ISong[] = files.map(file => {
          return {
            id: null,
            name: file.name,
            filePath: '',
            createdBy: 'user',
            createdAt: new Date()
          }
        });

        let songsIds : string[] = [];
        songs.forEach(song => this.songsService.createSong(song).then(result => {
          if (result.status === 'success') {
            songsIds.push(result.data.id);
          }
        }));

        let playlist : IPlaylist = {
          id: null,
          name: result.name,
          songs: songsIds,
          createdAt: new Date(),
          updatedAt: new Date(),
          createdBy: 'user'
        };

        this.playlistService.createPlaylist(playlist).then(result => {
          if (result.status === 'success') {
            this.playlists.push(result.data);
          }
        });
      }
    });

  }
}
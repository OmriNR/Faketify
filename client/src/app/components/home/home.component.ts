import {Component, OnInit} from '@angular/core';
import { PlaylistComponent } from '../playlist/playlist.component';
import { MatListModule } from '@angular/material/list';
import { IPlaylist } from '../../models/Playlist';
import { PlaylistService} from "../../services/PlaylistsService";
import { CommonModule } from '@angular/common';
import { PlaylistDialogComponent} from "../playlist-dialog/playlist-dialog.component";
import {MatDialog} from "@angular/material/dialog";

@Component({
  selector: 'app-home',
  imports: [PlaylistComponent, MatListModule, CommonModule],
  templateUrl: './home.component.html',
  providers: [PlaylistService],
  styleUrl: './home.component.scss'
})
export class HomeComponent implements OnInit {

  constructor(private playlistService: PlaylistService, private dialog: MatDialog) {
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
        // Handle the new playlist data
        console.log('New playlist:', result);
      }
    });

  }
}
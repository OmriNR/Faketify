import {Component, OnDestroy, OnInit} from '@angular/core';
import {MatCardModule} from "@angular/material/card";
import {MatListModule} from "@angular/material/list";
import {MatIconModule} from "@angular/material/icon";
import { IUser } from '../../models/User';
import { IPlaylist } from '../../models/Playlist';
import {CommonModule} from "@angular/common";
import {MatGridListModule} from "@angular/material/grid-list";
import {DialogService} from "../../services/DialogService";
import {CurrentUserService} from "../../services/CurrentUserService";
import { PlaylistService } from "../../services/PlaylistsService";
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-profile',
  imports: [
    MatCardModule,
    MatListModule,
    MatIconModule,
    MatGridListModule,
    CommonModule
  ],
  providers: [DialogService, PlaylistService],
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.scss'
})
export class ProfileComponent implements OnInit, OnDestroy {
  user: IUser | null = null;
  playlists: IPlaylist[] | null = null;
  followers : IUser[] | null = null;
  private playlistCreatedSubscription: Subscription;

  constructor(private dialogService: DialogService, private currentUserService: CurrentUserService, private playlistService: PlaylistService) {
    this.playlistCreatedSubscription = this.dialogService.playlistCreated.subscribe(() => {
      this.refreshPlaylists();
    });
  }



  ngOnInit(): void {
    this.dialogService.showGuestDialog();
    if (this.isUserLoggedIn()){
      this.user = this.currentUserService.getCurrentUser();
      this.refreshPlaylists();
    }

    this.followers = [
      {
        id: '1',
        name: 'John Doe',
        password: '<PASSWORD>',
        ownedPlaylists: [],
        followedUsers: [],
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: '1',
        name: 'John Doe',
        password: '<PASSWORD>',
        ownedPlaylists: [],
        followedUsers: [],
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: '1',
        name: 'John Doe',
        password: '<PASSWORD>',
        ownedPlaylists: [],
        followedUsers: [],
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: '1',
        name: 'John Doe',
        password: '<PASSWORD>',
        ownedPlaylists: [],
        followedUsers: [],
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: '1',
        name: 'John Doe',
        password: '<PASSWORD>',
        ownedPlaylists: [],
        followedUsers: [],
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: '1',
        name: 'John Doe',
        password: '<PASSWORD>',
        ownedPlaylists: [],
        followedUsers: [],
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: '1',
        name: 'John Doe',
        password: '<PASSWORD>',
        ownedPlaylists: [],
        followedUsers: [],
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: '1',
        name: 'John Doe',
        password: '<PASSWORD>',
        ownedPlaylists: [],
        followedUsers: [],
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: '1',
        name: 'John Doe',
        password: '<PASSWORD>',
        ownedPlaylists: [],
        followedUsers: [],
        createdAt: new Date(),
        updatedAt: new Date(),
      }
    ];
  }

  ngOnDestroy(): void {
    if (this.playlistCreatedSubscription) {
      this.playlistCreatedSubscription.unsubscribe();
    }
  }

  isUserLoggedIn(): boolean {
    return this.currentUserService.isLoggedIn();
  }

  async refreshPlaylists(): Promise<void> {
    if (!this.user) return;

    try {
      const result = await this.playlistService.getPlaylistsByUser(this.user.name);
      if (result.status === "success") {
        this.playlists = result.data;
      } else {
        alert("Error getting playlists");
      }
    } catch (error) {
      console.error('Error refreshing playlists:', error);
      alert("Error getting playlists");
    }
  }

}

import {Component, OnInit} from '@angular/core';
import {MatCardModule} from "@angular/material/card";
import {MatListModule} from "@angular/material/list";
import {MatIconModule} from "@angular/material/icon";
import { IUser } from '../../models/User';
import { IPlaylist } from '../../models/Playlist';
import {CommonModule} from "@angular/common";
import {MatGridListModule} from "@angular/material/grid-list";

@Component({
  selector: 'app-profile',
  imports: [
    MatCardModule,
    MatListModule,
    MatIconModule,
    MatGridListModule,
    CommonModule
  ],
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.scss'
})
export class ProfileComponent implements OnInit {
  user: IUser | null = null;
  playlists: IPlaylist[] | null = null;
  followers : IUser[] | null = null;

  constructor() {}

  ngOnInit(): void {
    this.user = {
      id: '1',
      name: 'John Doe',
      password: '<PASSWORD>',
      ownedPlaylists: [],
      followedUsers: [],
      createdAt: new Date(),
      updatedAt: new Date(),
    }

    this.playlists = [
      {
        id: '1',
        name: 'Chill Vibes',
        songs: [],
        createdAt: new Date(),
        updatedAt: new Date(),
        createdBy: 'John Doe',
      },
      {
        id: '2',
        name: 'Check',
        songs: [],
        createdAt: new Date(),
        updatedAt: new Date(),
        createdBy: 'John Doe',
      },
      {
        id: '2',
        name: 'Check',
        songs: [],
        createdAt: new Date(),
        updatedAt: new Date(),
        createdBy: 'John Doe',
      },
      {
        id: '2',
        name: 'Check',
        songs: [],
        createdAt: new Date(),
        updatedAt: new Date(),
        createdBy: 'John Doe',
      },
      {
        id: '2',
        name: 'Check',
        songs: [],
        createdAt: new Date(),
        updatedAt: new Date(),
        createdBy: 'John Doe',
      },
      {
        id: '2',
        name: 'Check',
        songs: [],
        createdAt: new Date(),
        updatedAt: new Date(),
        createdBy: 'John Doe',
      },
      {
        id: '2',
        name: 'Check',
        songs: [],
        createdAt: new Date(),
        updatedAt: new Date(),
        createdBy: 'John Doe',
      },
      {
        id: '2',
        name: 'Check',
        songs: [],
        createdAt: new Date(),
        updatedAt: new Date(),
        createdBy: 'John Doe',
      }
    ];

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
}

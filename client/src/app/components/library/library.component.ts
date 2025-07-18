import { Component } from '@angular/core';
import {MatButton } from "@angular/material/button";
import { MatCardModule } from "@angular/material/card";
import { CommonModule } from "@angular/common";

@Component({
  selector: 'app-library',
  imports: [MatButton, MatCardModule, CommonModule],
  templateUrl: './library.component.html',
  styleUrl: './library.component.scss'
})
export class LibraryComponent {
  selectedButton: string = '';

  selectButton(button: string) {
    this.selectedButton = button;
  }

  artists: any[] = [
    {
      name: 'John Doe',
      songs: 50,
      plays: 15000,
    },
    {
      name: 'John Doe',
      songs: 50,
      plays: 15000,
    },
    {
      name: 'John Doe',
      songs: 50,
      plays: 15000,
    },
    {
      name: 'John Doe',
      songs: 50,
      plays: 15000,
    },
    {
      name: 'John Doe',
      songs: 50,
      plays: 15000,
    },
    {
      name: 'John Doe',
      songs: 50,
      plays: 15000,
    },
    {
      name: 'John Doe',
      songs: 50,
      plays: 15000,
    },
    {
      name: 'John Doe',
      songs: 50,
      plays: 15000,
    }
  ];
  albums: any[] = [
    {
      name: 'Chill Vibes',
      createdBy: 'John Doe'
    },
    {
      name: 'Chill Vibes',
      createdBy: 'John Doe'
    },
    {
      name: 'Chill Vibes',
      createdBy: 'John Doe'
    },
    {
      name: 'Chill Vibes',
      createdBy: 'John Doe'
    },
    {
      name: 'Chill Vibes',
      createdBy: 'John Doe'
    },
    {
      name: 'Chill Vibes',
      createdBy: 'John Doe'
    },
    {
      name: 'Chill Vibes',
      createdBy: 'John Doe'
    },
    {
      name: 'Chill Vibes',
      createdBy: 'John Doe'
    }
  ]
  playlists: any[] = [
    {
      name: 'Chill Vibes',
      createdBy: 'John Doe',
    },
    {
      name: 'Chill Vibes',
      createdBy: 'John Doe',
    },
    {
      name: 'Chill Vibes',
      createdBy: 'John Doe',
    },
    {
      name: 'Chill Vibes',
      createdBy: 'John Doe',
    },
    {
      name: 'Chill Vibes',
      createdBy: 'John Doe',
    },
    {
      name: 'Chill Vibes',
      createdBy: 'John Doe',
    }
  ];
}

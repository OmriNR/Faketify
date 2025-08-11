import {Component, OnInit} from '@angular/core';
import {MatButton } from "@angular/material/button";
import { MatCardModule } from "@angular/material/card";
import { CommonModule } from "@angular/common";
import { DialogService} from "../../services/DialogService";
import { CurrentUserService } from "../../services/CurrentUserService";

@Component({
  selector: 'app-library',
  imports: [MatButton, MatCardModule, CommonModule],
  providers: [DialogService],
  templateUrl: './library.component.html',
  styleUrl: './library.component.scss'
})
export class LibraryComponent implements OnInit {

  constructor(private dialogService: DialogService, private currentUserService: CurrentUserService) { }

  ngOnInit(): void {
      this.dialogService.showGuestDialog();
  }

  selectedButton: string = '';

  selectButton(button: string) {
    this.selectedButton = button;
  }

  isUserLoggedIn(): boolean {
    return this.currentUserService.isLoggedIn();
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

import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import {MatCardModule} from '@angular/material/card';
import { MatTableModule } from '@angular/material/table';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-home',
  imports: [MatButtonModule, MatIconModule, MatCardModule, MatTableModule, CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent  {
  displayedColumns: string[] = ['position', 'name', 'songs', 'createdBy', 'plays', 'actions'];
  popularPlaylists = [
    { position: 1, name: 'Top Hits 2025', songs: 50, createdBy: 'John Doe', plays: 15000 },
    { position: 2, name: 'Workout Essentials', songs: 45, createdBy: 'Jane Smith', plays: 12300 },
    { position: 3, name: 'Chill Vibes', songs: 30, createdBy: 'Mike Johnson', plays: 10500 },
    { position: 4, name: 'Road Trip Mix', songs: 60, createdBy: 'Sarah Wilson', plays: 9800 },
    { position: 5, name: 'Study Focus', songs: 40, createdBy: 'Alex Brown', plays: 8900 }
  ];

  recentPlaylists = [
    {
      name: 'Chill Vibes',
      description: 'Perfect for relaxation',
      imageUrl: 'assets/playlist1.jpg'
    },
    {
      name: 'Workout Mix',
      description: 'High energy beats',
      imageUrl: 'assets/playlist2.jpg'
    },
    {
      name: 'Study Focus',
      description: 'Concentration boosters',
      imageUrl: 'assets/playlist3.jpg'
    },
    {
      name: 'Evening Jazz',
      description: 'Smooth jazz collection',
      imageUrl: 'assets/playlist4.jpg'
    },
    {
      name: 'Weekend Party',
      description: 'Top party hits',
      imageUrl: 'assets/playlist5.jpg'
    }
  ];

}
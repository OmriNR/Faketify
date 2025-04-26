import { Component } from '@angular/core';
import { PlaylistComponent } from '../playlist/playlist.component';
@Component({
  selector: 'app-home',
  imports: [PlaylistComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

}

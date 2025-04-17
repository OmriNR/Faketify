import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SongsGridComponent } from '../components/songs-grid-component';
@Component({
  selector: 'app-root',
  imports: [RouterOutlet, SongsGridComponent],
  template:`
  <songs-grid></songs-grid>
  `,
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'client';
}

import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MatSlideToggleModule }from '@angular/material/slide-toggle';
@Component({
  selector: 'app-root',
  imports: [RouterOutlet, MatSlideToggleModule],
  template:`
  <mat-slide-toggle>Toggle me!</mat-slide-toggle>
  `,
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'client';
}

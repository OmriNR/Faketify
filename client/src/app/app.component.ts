import { Component } from '@angular/core';
import { RouterOutlet, provideRouter } from '@angular/router';
import { ContainerComponent} from "./components/container/container.component";
import {routes} from "./app.routes";

@Component({
  selector: 'app-root',
  imports: [ContainerComponent],
  template:`
  <app-container></app-container>`,
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'client';
}

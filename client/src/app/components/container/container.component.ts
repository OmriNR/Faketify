import { Component } from '@angular/core';
import {MatCard, MatCardContent, MatCardModule} from "@angular/material/card";
import {MatListItem, MatListModule, MatNavList} from "@angular/material/list";
import {CommonModule} from "@angular/common";
import {MatButtonModule} from "@angular/material/button";
import {MatIconModule} from "@angular/material/icon";
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-container',
  imports: [MatListModule, CommonModule, MatButtonModule, MatCardModule, MatIconModule, RouterModule],
  templateUrl: './container.component.html',
  styleUrl: './container.component.scss'
})
export class ContainerComponent {

}

import { Component } from '@angular/core';
import {MatCard, MatCardContent, MatCardModule} from "@angular/material/card";
import {MatListItem, MatListModule, MatNavList} from "@angular/material/list";
import {CommonModule} from "@angular/common";
import {MatButtonModule} from "@angular/material/button";
import {MatIconModule} from "@angular/material/icon";
import { RouterModule } from '@angular/router';
import { CurrentUserService } from "../../services/CurrentUserService";
import {IUser} from "../../models/User";
import { DialogService} from "../../services/DialogService";

@Component({
  selector: 'app-container',
  imports: [MatListModule, CommonModule, MatButtonModule, MatCardModule, MatIconModule, RouterModule],
  templateUrl: './container.component.html',
  styleUrl: './container.component.scss',
  providers: [CurrentUserService]
})
export class ContainerComponent {
  constructor(private currentUserService: CurrentUserService,
              private dialogService: DialogService) { }

  getCurrentUser(): IUser | null {
    return this.currentUserService.getCurrentUser();
  }

  isUserLoggedIn(): boolean {
    return this.currentUserService.isLoggedIn();
  }

  openSignInDialog(): void {
    this.dialogService.showMessage({
      title: "Sign In",
      message: "Please sign in to continue",
      closeButtonText: "Sign In"
    })
  }

  openSignUpDialog(): void {
    this.dialogService.showMessage({
      title: "Sign Up",
      message: "Please sign up to continue",
      closeButtonText: "Sign Up"
    })  }
}

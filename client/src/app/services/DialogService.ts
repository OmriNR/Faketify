import { Injectable } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import {SignInDialogComponent} from "../components/dialogs/sign-in-dialog/sign-in-dialog.component";
import {SignUpDialogComponent} from "../components/dialogs/sign-up-dialog/sign-up-dialog.component";
import {GuestDialogComponent} from "../components/dialogs/guest-dialog/guest-dialog.component";
import {CreatePlaylistDialogComponent} from "../components/dialogs/create-playlist-dialog/create-playlist-dialog.component";
import {CurrentUserService} from "./CurrentUserService";
@Injectable({
    providedIn: 'root'
})
export class DialogService {
    constructor(private dialog: MatDialog, private currentUserService: CurrentUserService) {}

    showLogInDialog() {
        this.dialog.open(SignInDialogComponent, {
            width: '400px',
            disableClose: true,
        }).afterClosed().subscribe(result => {
            if (result)
            {
                this.currentUserService.setCurrentUser(result);
            }
        });
    }

    showSignUpDialog() {
        this.dialog.open(SignUpDialogComponent, {
            width: '400px',
            disableClose: true,
        }).afterClosed().subscribe(result => {
            if (result)
            {
                this.currentUserService.setCurrentUser(result);
            }
        })
    }

    showGuestDialog() {
        if (!this.currentUserService.isLoggedIn()) {
            this.dialog.open(GuestDialogComponent, {
                width: '400px',
                disableClose: false,
            }).afterClosed().subscribe(result => {
                if (result == 'signUp')
                {
                    this.showSignUpDialog();
                }
                else if (result == 'logIn')
                {
                    this.showLogInDialog();
                }
            });
        }
    }

    showCreatePlaylistDialog() {
        this.dialog.open(CreatePlaylistDialogComponent, {
            width: '400px',
            disableClose: false,
        }).afterClosed().subscribe(result => {

        })
    }
}

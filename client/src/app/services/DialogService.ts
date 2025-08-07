import { Injectable } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import {SignInDialogComponent, SimpleDialogData} from "../components/dialogs/sign-in-dialog/sign-in-dialog.component";

@Injectable({
    providedIn: 'root'
})
export class DialogService {
    constructor(private dialog: MatDialog) {}

    showMessage(data: SimpleDialogData) {
        return this.dialog.open(SignInDialogComponent, {
            width: '400px',
            data: data,
            disableClose: false
        });
    }
}

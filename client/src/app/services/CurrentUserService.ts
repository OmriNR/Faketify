import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable} from "rxjs";
import { IUser} from "../models/User";

@Injectable({
    providedIn: 'root'
})

export class CurrentUserService {
    private currentUserSubject: BehaviorSubject<IUser | null> = new BehaviorSubject<IUser | null>(null);
    public currentUser$: Observable<IUser | null> = this.currentUserSubject.asObservable();

    public getCurrentUser(): IUser | null {
        return this.currentUserSubject.value;
    }

    public setCurrentUser(user: IUser) : void {
        this.currentUserSubject.next(user);
    }

    public isLoggedIn(): boolean {
        return this.currentUserSubject.value !== null;
    }
}
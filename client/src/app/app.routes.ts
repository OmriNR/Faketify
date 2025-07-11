import { Routes } from '@angular/router';
import { HomeComponent} from "./components/home/home.component";
import { SearchComponent} from "./components/search/search.component";
import {LibraryComponent} from "./components/library/library.component";
import {ProfileComponent} from "./components/profile/profile.component";

export const routes: Routes = [
    { path: 'home', component: HomeComponent },
    { path: 'search', component: SearchComponent },
    { path: 'library', component: LibraryComponent },
    { path: 'profile', component: ProfileComponent }

];

import { Routes } from '@angular/router';
import { CardsComponent } from './../cards/cards.component';
import { ProfileComponent } from '../profile/profile.component';

export const routes: Routes = [
    { path: '', redirectTo: 'cards', pathMatch: 'full'},
    { path: 'cards', component: CardsComponent },
    { path: 'profile', component: ProfileComponent}
]
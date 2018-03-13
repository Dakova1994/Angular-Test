import { Routes } from '@angular/router';
import { CardsComponent } from './../cards/cards.component';

export const routes: Routes = [
    { path: '', redirectTo: 'cards', pathMatch: 'full'},
    { path: 'cards', component: CardsComponent }
]
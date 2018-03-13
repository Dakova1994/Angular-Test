import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';

import { AppComponent } from './app/app.component';
import { CardsComponent } from './cards/cards.component';

import { CardsService } from './cards/cards.service';

import { routes } from './app/routes';

@NgModule({
  declarations: [
    AppComponent,
    CardsComponent
  ],
  imports: [
    BrowserModule, HttpClientModule, FormsModule, RouterModule.forRoot(routes)
  ],
  providers: [CardsService],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { Component, OnInit } from '@angular/core';
import { CardsService} from './app.service';
import { IDeck, IPile } from './deck.model';
import { NgModel } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
    title = 'app';
    pile: IPile;
    deck: IDeck;
    cardsNumber = 1;
    constructor(private cardsService: CardsService) {}
    ngOnInit() {
        this.cardsService.getShuffledDeck().subscribe( shuffledDeck  => {
            this.deck = shuffledDeck ;
        });
    }
    onClickMe() {
        this.cardsService.getCards(this.deck.deck_id, this.cardsNumber).subscribe( pile  => {
            this.pile = pile ;
        });
    }
}

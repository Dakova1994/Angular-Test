import { Component, OnInit } from '@angular/core';
import { CardsService} from './app.service';
import { IDeck, ICards } from './deck.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
    title = 'app';
    twoCards: ICards;
    deck: IDeck;
    constructor(private cardsService: CardsService) {}
    ngOnInit() {
        this.cardsService.getShuffledDeck().subscribe( shuffledDeck  => {
            this.deck = shuffledDeck ;
            console.log('moje rezultaty:', this.deck);
            this.cardsService.getCards(this.deck.deck_id, this.deck.remaining).subscribe( newCards  => {
                this.twoCards = newCards ;
                console.log('dwie karty:', this.twoCards);
            });
        });
    }
}

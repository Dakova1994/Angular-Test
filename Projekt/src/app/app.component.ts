import { Component, OnInit } from '@angular/core';
import { CardsService} from './app.service';
import { IDeck, IPile } from './deck.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
    public title = 'app';
    public pile: IPile;
    public deck: IDeck;
    public drawnCards = [];
    public numberOfCards = 0;
    constructor(private cardsService: CardsService) {}
    ngOnInit() {
        this.cardsService.getShuffledDeck().subscribe( shuffledDeck  => {
            this.deck = shuffledDeck ;
        });
    }
    drawCards() {
        this.cardsService.getCards(this.deck.deck_id, this.numberOfCards).subscribe( pile  => {
            this.pile = pile ;
            this.pile.cards.map(card => {
                this.drawnCards.push(card);
            })
        });
    }
}

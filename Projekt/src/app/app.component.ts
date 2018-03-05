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
    public myCards = [];
    public numberOfCards = 0;
    public x: number;
    public isNewDeckChosen: boolean=false;
    constructor(private cardsService: CardsService) {}
    ngOnInit() {
        this.cardsService.getShuffledDeck().subscribe( shuffledDeck  => {
            this.deck = shuffledDeck ;
        });
    }
    drawCards() {
        if(this.isNewDeckChosen){
            this.drawnCards=[];
            this.cardsService.getShuffledDeck().subscribe( shuffledDeck  => {
                this.deck = shuffledDeck ;
            });
        }
        this.cardsService.getCards(this.deck.deck_id, this.numberOfCards).subscribe( pile  => {
            this.pile = pile ;
            this.pile.cards.map(card => {
                this.drawnCards.push(card);
                console.log(this.drawCards);
            })
        });
    
    }
    isNextDeck(){
        if(this.isNewDeckChosen){
            this.isNewDeckChosen=false;
        }
        else{
            this.isNewDeckChosen=true;
        }
    }
    remainingCard(){
        return 52-(this.drawnCards.length);
    }
  
}

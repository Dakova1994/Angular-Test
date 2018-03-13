import { Component, OnInit } from '@angular/core';
import { CardsService} from './cards.service';
import { IDeck, IPile } from './deck.model';

@Component({
    templateUrl: './cards.component.html',
    styleUrls: ['./cards.component.css']
})
export class CardsComponent implements OnInit {
    public title = 'app';
    public currentPile: IPile;
    public currentDeck: IDeck;
    public drawnCards = [];
    public myCards = [];
    public numberOfCards = 1;
    public x: number;
    public isNewDeckChosen: boolean=false;
    constructor(private cardsService: CardsService) {}
    ngOnInit() {
        this.cardsService.getShuffledDeck().subscribe( shuffledDeck  => {
            this.currentDeck = shuffledDeck ;
        });
    }
    drawCards() {
        if(this.isNewDeckChosen){
            this.drawnCards=[];
            this.cardsService.getShuffledDeck().subscribe( shuffledDeck  => {
                this.currentDeck = shuffledDeck ;
            });
        }
        this.cardsService.getCards(this.currentDeck.deck_id, this.numberOfCards).subscribe( pile  => {
            this.currentPile = pile ;
            this.currentPile.cards.map(card => {
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

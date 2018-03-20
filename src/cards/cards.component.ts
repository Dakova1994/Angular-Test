import { Component, OnInit } from '@angular/core';
import { CardsService} from './cards.service';
import { IDeck, IPile } from './deck.model';
import { delay } from 'q';

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
    public isEmptyDeck: string;
    constructor(private cardsService: CardsService) {}
    ngOnInit() {
        this.cardsService.getShuffledDeck().subscribe( shuffledDeck  => {
            this.currentDeck = shuffledDeck ;
        });
    }
    drawCards() {
        console.log(this.currentDeck.remaining);    
        if(this.remainingCard()-this.numberOfCards<=0){
                this.isEmptyDeck = 'Not enough cards to draw!'
        } else {
            this.isEmptyDeck = '';
        }
        
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

    isCheck(){
        this.isEmptyDeck='';
    }

    remainingCard(){
        return 52-(this.drawnCards.length);
    }
  
}

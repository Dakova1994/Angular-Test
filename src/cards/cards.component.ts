import { Component, OnInit } from '@angular/core';
import { CardsService} from './cards.service';
import { IDeck, IPile, ICard } from './deck.model';
import { delay } from 'q';

@Component({
    templateUrl: './cards.component.html',
    styleUrls: ['./cards.component.css']
})
export class CardsComponent implements OnInit {
    public title = 'app';
    public currentPile: IPile;
    public currentDeck: IDeck;
    public drawnCards: ICard[] = [];
    public numberOfCards: number ;
    public isNewDeckChosen: boolean = false;
    public error: string;
    public buttonDisabled: boolean = false;

    constructor(private cardsService: CardsService) {}

    onInput(value:number){
    this.numberOfCards = value;
    if(this.numberOfCards != 0){
        this.buttonDisabled = false;
    }
    else{
        this.buttonDisabled = true;
    }

    }

    ngOnInit() {
        this.cardsService.getShuffledDeck().subscribe( shuffledDeck  => {
            this.currentDeck = shuffledDeck ;
        });
    }
    drawCards(): void {   
        if (this.isNewDeckChosen) {
            this.cleanDrawnCards();
            this.fetchNewDeck();
        } else {
            this.addCardsToPile();
        }
        
        if (this.numberOfCards > this.getRemainingCardsNumber()) {
            this.error = 'Not enough cards to draw!';
        };
    };
    
    addCardsToPile(): void {
        this.cardsService.getCards(this.currentDeck.deck_id, this.numberOfCards).subscribe( pile  => {
            this.currentPile = pile;
            this.currentPile.cards.map(card => {
                this.drawnCards.push(card);
            });
        });
    };

    fetchNewDeck(): void {
        this.cardsService.getShuffledDeck().subscribe( shuffledDeck  => {
            this.currentDeck = shuffledDeck;
            this.cardsService.getCards(this.currentDeck.deck_id, this.numberOfCards).subscribe( pile  => {
                this.currentPile = pile;
                this.currentPile.cards.map(card => {
                    this.drawnCards.push(card);
                });
            });
        });
    };

    cleanDrawnCards(): void {
        this.drawnCards = [];
    };


    isCheck(): void {
        this.error = '';
    };

    getRemainingCardsNumber(): number {
        return 52 - this.drawnCards.length;
    };
};

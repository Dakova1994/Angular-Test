import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IDeck, ICards } from './deck.model';

@Injectable()
export class CardsService{
    constructor(private http: HttpClient ){}

    public getShuffledDeck(){
        return this.http.get<IDeck>('https://deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1');
    }
    
    public getCards(deck_id: string, cardsNumber: number ){
        return this.http.get<ICards>(`https://deckofcardsapi.com/api/deck/${deck_id}/draw/?count=2`);
    }
} 
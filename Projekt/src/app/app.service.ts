import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IDeck, IPile } from './deck.model';

@Injectable()
export class CardsService {
    constructor(private http: HttpClient ) {}

    public getShuffledDeck(numberOfDecks: number = 1 ) {
        return this.http.get<IDeck>('https://deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1');
    }

    public getCards(deck_id: string, numberOfDecks: number ) {
        return this.http.get<IPile>(`https://deckofcardsapi.com/api/deck/${deck_id}/draw/?count=${numberOfDecks}`);
    }
}

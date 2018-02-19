import { Injectable } from "@angular/core";
import { HttpClient } from '@angular/common/http';
import { IDeck } from "./deck.model";
import {HttpHeaders} from '@angular/common/http';
@Injectable()
export class CardsService{
    constructor(private http: HttpClient){}

    public getShuffledDeck(){
        const headers = {
            headers: new HttpHeaders({
          })};
        return this.http.get<IDeck>("https://deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1", headers)
    }
    
    public getCards(deck_id: string){
        return this.http.get<IDeck>(`https://deckofcardsapi.com/api/deck/${deck_id}/draw/?count=2`)
    }
} 
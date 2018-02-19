import { Component, OnInit } from '@angular/core';
import { CardsService} from "./app.service"
import { element } from 'protractor';
import { IDeck } from "./deck.model";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'app';
  twoCards:IDeck;
  deck:IDeck;
  constructor (private cardsService: CardsService){}
  ngOnInit(){
    this.cardsService.getShuffledDeck().subscribe( results=> {
        this.deck=results;
        console.log("moje rezultaty:", this.deck)
        this.cardsService.getCards(this.deck.deck_id).subscribe(results =>{
          this.twoCards=results;
          console.log("dwie karty:", this.twoCards);
        });
    });
  }
}

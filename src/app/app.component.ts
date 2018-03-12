import { Component } from '@angular/core';

@Component({
  selector: 'app-root',  
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
    public isEmptyDeck: string;
        if(this.drawnCards.length>=52){
            this.isEmptyDeck = 'Not enough cards to draw!'
        }
}

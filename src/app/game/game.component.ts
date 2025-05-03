import { Component } from '@angular/core';

@Component({
  selector: 'app-game',
  imports: [],
  templateUrl: './game.component.html',
  styleUrl: './game.component.css'
})
export class GameComponent {
  games = [
    { id: 1, name: 'Chess', players: 2, description: 'A strategy board game played on an 8x8 grid.' },
    { id: 2, name: 'Monopoly', players: 2, description: 'A board game where players buy and trade properties.' },
    { id: 3, name: 'Poker', players: 2, description: 'A card game that combines gambling and strategy.' },
    { id: 4, name: 'Scrabble', players: 2, description: 'A word game where players create words on a board.' },
    { id: 5, name: 'Settlers of Catan', players: 3, description: 'A board game where players collect resources and build settlements.' },
    { id: 6, name: 'Risk', players: 2, description: 'A strategy board game of diplomacy and conquest.' }
  ];

}

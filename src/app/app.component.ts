import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { UserComponent } from './user/user.component';
import { GameComponent } from './game/game.component';
import { PruebaImgComponent } from './prueba-img/prueba-img.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, UserComponent,GameComponent,PruebaImgComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
  
})
export class AppComponent {
  title = 'angular-17-app';
  city = 'Cali';
  country = 'Colombia';

}

import { Component } from '@angular/core';

@Component({
  selector: 'app-prueba-img',
  templateUrl: './prueba-img.component.html',
  styleUrls: ['./prueba-img.component.css']
})
export class PruebaImgComponent {
  img = [
    { id: 1, username: 'Santiago-Ospina-Gonzalez', img: this.getGithubImage('Santiago-Ospina-Gonzalez') },
    { id: 2, username: 'Angel-Cuero', img: this.getGithubImage('Angel-Cuero') },
  ];
  getGithubImage(username: string): string {
    return `https://github.com/${username}.png`;
  }
}

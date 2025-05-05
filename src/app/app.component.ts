import { Component, HostListener } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { UserComponent } from './user/user.component';
import { NavbarComponent } from './navbar/navbar.component';
import { TablaComponent } from './tabla/tabla.component';
import { TablaCursosComponent } from "./tabla-cursos/tabla-cursos.component";
import { FormularioComponent } from './formulario/formulario.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  imports: [CommonModule,RouterOutlet, UserComponent, NavbarComponent, TablaComponent,FormularioComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
  
})
export class AppComponent {
  title = 'angular-17-app';
  username = '';
  mostrarNavbar = true;
  
  scrollPosition = 0;

  @HostListener('window:scroll', ['$event'])
  onScroll() {
    const currentScrollPosition = window.pageYOffset;

    const header = document.querySelector('header'); // Selecciona el header
    if (currentScrollPosition > this.scrollPosition) {
      // Scroll hacia abajo
      this.mostrarNavbar = false;
      header?.classList.add('hidden');
      header?.classList.remove('visible');
    } else {
      // Scroll hacia arriba
      this.mostrarNavbar = true;
      header?.classList.add('visible');
      header?.classList.remove('hidden');
    }

    this.scrollPosition = currentScrollPosition;
  }
}

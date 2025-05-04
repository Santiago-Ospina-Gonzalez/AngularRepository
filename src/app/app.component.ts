import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { UserComponent } from './user/user.component';
import { NavbarComponent } from './navbar/navbar.component';
import { TablaComponent } from './tabla/tabla.component';
import { TablaCursosComponent } from "./tabla-cursos/tabla-cursos.component";
import { FormularioComponent } from './formulario/formulario.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, UserComponent, NavbarComponent, TablaComponent,FormularioComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
  
})
export class AppComponent {
  title = 'angular-17-app';
  username = '';
}

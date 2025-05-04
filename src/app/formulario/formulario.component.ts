import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-formulario',
  imports: [CommonModule],
  templateUrl: './formulario.component.html',
  standalone: true,
  styleUrl: './formulario.component.css'
})
export class FormularioComponent {
  // Definimos el título del formulario
  titulo = 'Cursos';
  // Definimos los campos del formulario
  //['ID', 'Nombre', 'Descripcion', 'idDocente', 'duracion', 'Modalidad', 'Cupos', 'Horario', 'IdSemestre', 'Creditos', 'Estado', 'FechaCreacion'];
  campos = [
    { label: 'ID', valor: '' },
    { label: 'Nombre', valor: '' },
    { label: 'Descripcion', valor: '' },
    { label: 'idDocente', valor: '' },
    { label: 'duracion', valor: '' },
    { label: 'Modalidad', valor: '' },
    { label: 'Cupos', valor: '' },
    { label: 'Horario', valor: '' },
    { label: 'IdSemestre', valor: '' },
    { label: 'Creditos', valor: '' },
    { label: 'Estado', valor: '' },
    { label: 'FechaCreacion', valor: '' }
  ];
    // Define la función trackByFn
    trackByFn(index: number, item: any): number {
      return index; 
    }

}

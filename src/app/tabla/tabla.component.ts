import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-tabla',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './tabla.component.html',
  styleUrls: ['./tabla.component.css']
})
export class TablaComponent {
  titulos = ['ID', 'Nombre', 'Descripcion', 'idDocente', 'duracion', 'Modalidad', 'Cupos', 'Horario', 'IdSemestre', 'Creditos', 'Estado', 'FechaCreacion'];
  tituloTabla = 'Cursos';
  datos: Record<string, any>[] = [
    {
      ID: 1,
      Nombre: 'Curso A',
      Descripcion: 'Introducción a Angular',
      idDocente: 101,
      duracion: '4 semanas',
      Modalidad: 'Virtual',
      Cupos: 25,
      Horario: 'Lunes y miércoles',
      IdSemestre: '2025-1',
      Creditos: 3,
      Estado: 'Activo',
      FechaCreacion: '2025-01-15'
    },
    {
      ID: 2,
      Nombre: 'Curso B',
      Descripcion: 'Avanzado en Angular',
      idDocente: 102,
      duracion: '6 semanas',
      Modalidad: 'Presencial',
      Cupos: 20,
      Horario: 'Martes y jueves',
      IdSemestre: '2025-1',
      Creditos: 4,
      Estado: 'Inactivo',
      FechaCreacion: '2025-01-20'
    }
  ];
  tablaContraida = true;

  toggleTabla() {
    this.tablaContraida = !this.tablaContraida;
  }
}

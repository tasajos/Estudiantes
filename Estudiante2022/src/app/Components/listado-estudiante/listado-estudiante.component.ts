import { Component } from '@angular/core';
import { estudiante } from 'src/app/Interfaces/estudiante';


const ELEMENT_DATA: estudiante[] = [
{

  nombre:"Carlos",apellido:"Azcarraga",curso:"3B",telefono:70776212,edad:14
}
];

@Component({
  selector: 'app-listado-estudiante',
  templateUrl: './listado-estudiante.component.html',
  styleUrls: ['./listado-estudiante.component.css']
})
export class ListadoEstudianteComponent {
  displayedColumns: string[] = ['position', 'name', 'weight', 'symbol'];
  dataSource = ELEMENT_DATA;
}

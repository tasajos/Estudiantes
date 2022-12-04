import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { config } from 'rxjs';
import { estudiante } from 'src/app/Interfaces/estudiante';



const ListEstudiante: estudiante[] = [
{  nombre:"Carlos",apellido:"Azcarraga",curso:"3B",telefono:70776212,edad:14},
{  nombre:"Andres",apellido:"Azcarraga",curso:"3B",telefono:70710386,edad:15},
{  nombre:"Luis",apellido:"Miguel",curso:"3B",telefono:70776212,edad:12},
];

@Component({
  selector: 'app-listado-estudiante',
  templateUrl: './listado-estudiante.component.html',
  styleUrls: ['./listado-estudiante.component.css']
})
export class ListadoEstudianteComponent implements AfterViewInit{
  displayedColumns: string[] = ['nombre','apellido','curso','telefono','edad','acciones' ];
  dataSource = new MatTableDataSource<estudiante>(ListEstudiante);
  
  constructor(private _snackBar: MatSnackBar) {}

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  
  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
    this.paginator._intl.itemsPerPageLabel ="Items por Pagina"
  }
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
  eliminarestudiante() {
    this._snackBar.open("El estudiante fue eliminiado con exito","",{
duration:2000,
horizontalPosition:'right'
    } )

  }
}

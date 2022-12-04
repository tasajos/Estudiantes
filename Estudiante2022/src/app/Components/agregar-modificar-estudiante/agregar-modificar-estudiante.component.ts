import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { estudiante } from 'src/app/Interfaces/estudiante';

@Component({
  selector: 'app-agregar-modificar-estudiante',
  templateUrl: './agregar-modificar-estudiante.component.html',
  styleUrls: ['./agregar-modificar-estudiante.component.css']
})
export class AgregarModificarEstudianteComponent {
form: FormGroup




constructor(private fb: FormBuilder){
this.form = this.fb.group({
nombre: ["", Validators.required],
apellido: ["", Validators.required],
curso: ["", Validators.required],
telefono: ["", Validators.required],
edad: ["", Validators.required],


})

}
AgregarEstudiante(){
  
  //Const

  const nombre =this.form.value.nombre;

  //estructura
  const estudiantes: estudiante={

    nombre:this.form.value.nombre,
    apellido:this.form.value.apellido,
    curso:this.form.value.curso,
    telefono:this.form.value.telefono,
    edad:this.form.value.edad,
  }
console.log(estudiantes)
  
  }


}

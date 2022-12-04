import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


// Componentes
import { AgregarModificarEstudianteComponent } from './Components/agregar-modificar-estudiante/agregar-modificar-estudiante.component';
import { ListadoEstudianteComponent } from './Components/listado-estudiante/listado-estudiante.component';
import { VerEstudianteComponent } from './Components/ver-estudiante/ver-estudiante.component';


const routes: Routes = [

  {path: "",redirectTo:"listEstudiante", pathMatch:"full"  },
  {path: "listEstudiante",component: ListadoEstudianteComponent},
  {path: "agrEstudiante",component: AgregarModificarEstudianteComponent},
  {path: "verEstudiante/:id",component: VerEstudianteComponent},
  {path: "EditarEstudiante/:id",component: AgregarModificarEstudianteComponent},
  {path: "**",redirectTo:"listEstudiante", pathMatch:"full"},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

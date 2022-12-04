import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';


//Modulos
import { SharedModule } from './Shared/shared.module';

//Componentes
import { AgregarModificarEstudianteComponent } from './Components/agregar-modificar-estudiante/agregar-modificar-estudiante.component';
import { ListadoEstudianteComponent } from './Components/listado-estudiante/listado-estudiante.component';
import { VerEstudianteComponent } from './Components/ver-estudiante/ver-estudiante.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';




@NgModule({
  declarations: [
    AppComponent,
    AgregarModificarEstudianteComponent,
    ListadoEstudianteComponent,
    VerEstudianteComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    SharedModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

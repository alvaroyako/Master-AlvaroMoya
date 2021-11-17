import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { MenuComponent } from './components/menu/menu.component';
import { LibreriaComponent } from './components/libreria/libreria.component';
import { HomeComponent } from './components/home/home.component';
import { appRoutingProviders, routing } from './app.routing';
import { ComicComponent } from './components/comic/comic.component';
import { FormsModule } from '@angular/forms';
import { ComicsinyecionComponent } from './components/comicsinyecion/comicsinyecion.component';
import { ComicsService } from './services/comics.service';
import { HttpClientModule } from '@angular/common/http';
import { PersonasapiComponent } from './components/personasapi/personasapi.component'
import { ServicepersonasService } from './services/servicepersonas.service';
import { EmpleadoService } from './services/empleado.service';
import { EmpleadossalarioComponent } from './components/empleadossalario/empleadossalario.component';
import { Empleado2Service } from './services/empleado2.service';
import { Empleado2 } from './Models/empleado2';
import { EmpleadosoficioComponent } from './components/empleadosoficio/empleadosoficio.component';
import { DetalleempleadoComponent } from './components/detalleempleado/detalleempleado.component';
import { ListadoempleadosComponent } from './components/listadoempleados/listadoempleados.component';



@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    LibreriaComponent,
    HomeComponent,
    ComicComponent,
    ComicsinyecionComponent,
    PersonasapiComponent,
    EmpleadossalarioComponent,
    EmpleadosoficioComponent,
    DetalleempleadoComponent,
    ListadoempleadosComponent,

  ],
  imports: [
    BrowserModule,
    routing,
    FormsModule,
    HttpClientModule
  ],
  providers: [appRoutingProviders, ComicsService, ServicepersonasService, EmpleadoService, Empleado2Service],
  bootstrap: [AppComponent]
})
export class AppModule { }

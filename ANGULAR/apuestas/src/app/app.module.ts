import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { appRoutingProviders, routing } from './app.routing';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { MenuComponent } from './components/menu/menu.component';
import { ApuestasService } from './services/apuestas.service';
import { DetalleequipoComponent } from './components/detalleequipo/detalleequipo.component';
import { ListajugadoresComponent } from './components/listajugadores/listajugadores.component';
import { DetallesjugadorComponent } from './components/detallesjugador/detallesjugador.component';
import { ListaapuestasComponent } from './components/listaapuestas/listaapuestas.component';
import { RealizarapuestaComponent } from './components/realizarapuesta/realizarapuesta.component';
import { BusquedaComponent } from './components/busqueda/busqueda.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    MenuComponent,
    DetalleequipoComponent,
    ListajugadoresComponent,
    DetallesjugadorComponent,
    ListaapuestasComponent,
    RealizarapuestaComponent,
    BusquedaComponent,
  ],
  imports: [
    BrowserModule,
    routing,
    FormsModule,
    HttpClientModule
  ],
  providers: [appRoutingProviders, ApuestasService],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { appRoutingProviders, routing } from './app.routing';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { MenuComponent } from './components/menu/menu.component';
import { SerieService } from './services/serie.service';
import { DetallesserieComponent } from './components/detallesserie/detallesserie.component';
import { PersonajesComponent } from './components/personajes/personajes.component';
import { NuevopersonajeComponent } from './components/nuevopersonaje/nuevopersonaje.component';
import { ModificarpersonajeComponent } from './components/modificarpersonaje/modificarpersonaje.component';
SerieService

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    MenuComponent,
    DetallesserieComponent,
    PersonajesComponent,
    NuevopersonajeComponent,
    ModificarpersonajeComponent
  ],
  imports: [
    BrowserModule,
    routing,
    FormsModule,
    HttpClientModule
  ],
  providers: [appRoutingProviders,SerieService],
  bootstrap: [AppComponent]
})
export class AppModule { }

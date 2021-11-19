import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { appRoutingProviders, routing } from './app.routing';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { MenuComponent } from './components/menu/menu.component';
import { HomeComponent } from './components/home/home.component';
import { PeliculasComponent } from './components/peliculas/peliculas.component';
import { PeliculasserviceService } from './services/peliculasservice.service';
import { DetallepeliculasComponent } from './components/detallepeliculas/detallepeliculas.component';
import { ModificarComponent } from './components/modificar/modificar.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    HomeComponent,
    PeliculasComponent,
    DetallepeliculasComponent,
    ModificarComponent
  ],
  imports: [
    BrowserModule,
    routing,
    FormsModule,
    HttpClientModule
  ],
  providers: [appRoutingProviders, PeliculasserviceService],
  bootstrap: [AppComponent]
})
export class AppModule { }

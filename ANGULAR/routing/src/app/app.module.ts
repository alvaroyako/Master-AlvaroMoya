import { routing, appRoutingProviders } from './app.routing'
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { CineComponent } from './components/cine/cine.component';
import { MusicaComponent } from './components/musica/musica.component';
import { TvComponent } from './components/tv/tv.component';
import { MenuComponent } from './components/menu/menu.component';
import { Error404Component } from './components/error404/error404.component';
import { NumerodobleComponent } from './components/numerodoble/numerodoble.component';
import { MenucollatzComponent } from './components/menucollatz/menucollatz.component';
import { CollatzComponent } from './components/collatz/collatz.component';
import { ListaproductosComponent } from './components/listaproductos/listaproductos.component';
import { CocheComponent } from './components/coche/coche.component';
import { ConcesionarioComponent } from './components/concesionario/concesionario.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CineComponent,
    MusicaComponent,
    TvComponent,
    MenuComponent,
    Error404Component,
    NumerodobleComponent,
    MenucollatzComponent,
    CollatzComponent,
    ListaproductosComponent,
    CocheComponent,
    ConcesionarioComponent,

  ],
  imports: [
    BrowserModule,
    routing
  ],
  providers: [appRoutingProviders],
  bootstrap: [AppComponent],
})
export class AppModule { }

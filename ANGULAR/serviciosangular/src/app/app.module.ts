import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { MenuComponent } from './components/menu/menu.component';
import { LibreriaComponent } from './components/libreria/libreria.component';
import { HomeComponent } from './components/home/home.component';
import { appRoutingProviders, routing } from './app.routing';
import { ComicComponent } from './components/comic/comic.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    LibreriaComponent,
    HomeComponent,
    ComicComponent
  ],
  imports: [
    BrowserModule,
    routing,
    FormsModule
  ],
  providers: [appRoutingProviders],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { appRoutingProviders, routing } from './app.routing';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { MenuComponent } from './components/menu/menu.component';
import { DepartamentoService } from './services/departamento.service';
import { HomeComponent } from './components/home/home.component';
import { InsertardepartamentoComponent } from './components/insertardepartamento/insertardepartamento.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    HomeComponent,
    InsertardepartamentoComponent
  ],
  imports: [
    BrowserModule,
    routing,
    FormsModule,
    HttpClientModule
  ],
  providers: [appRoutingProviders, DepartamentoService],
  bootstrap: [AppComponent]
})
export class AppModule { }

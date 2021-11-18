import { Routes, RouterModule } from "@angular/router";
import { ModuleWithProviders } from "@angular/core";

import { HomeComponent } from "./components/home/home.component";
import { DetalleequipoComponent } from "./components/detalleequipo/detalleequipo.component";
import { ListajugadoresComponent } from "./components/listajugadores/listajugadores.component";
import { DetallesjugadorComponent } from "./components/detallesjugador/detallesjugador.component";
import { ListaapuestasComponent } from "./components/listaapuestas/listaapuestas.component";
import { RealizarapuestaComponent } from "./components/realizarapuesta/realizarapuesta.component";

const appRoutes: Routes = [
    { path: "", component: HomeComponent },
    { path: "home", component: HomeComponent },
    { path: "detallesequipo/:idequipo", component: DetalleequipoComponent },
    { path: "jugadores/:idequipo", component: ListajugadoresComponent },
    { path: "detallesjugador/:idjugador", component: DetallesjugadorComponent },
    { path: "apuestas", component: ListaapuestasComponent },
    { path: "realizarapuesta", component: RealizarapuestaComponent },


];

export const appRoutingProviders: any[] = [];
export const routing: ModuleWithProviders<any> = RouterModule.forRoot(appRoutes);
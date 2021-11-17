import { Routes, RouterModule } from "@angular/router";
import { ModuleWithProviders } from "@angular/core";
import { HomeComponent } from "./components/home/home.component";
import { DetallesserieComponent } from "./components/detallesserie/detallesserie.component";
import { PersonajesComponent } from "./components/personajes/personajes.component";
import { NuevopersonajeComponent } from "./components/nuevopersonaje/nuevopersonaje.component";
import { ModificarpersonajeComponent } from "./components/modificarpersonaje/modificarpersonaje.component";

const appRoutes: Routes = [
    { path: "", component: HomeComponent },
    { path: "home", component: HomeComponent },
    { path: "detalles/:idserie", component: DetallesserieComponent },
    { path: "personajes/:idserie", component: PersonajesComponent },
    { path: "nuevopj", component: NuevopersonajeComponent },
    { path: "modificarpj", component: ModificarpersonajeComponent },
];

export const appRoutingProviders: any[] = [];
export const routing: ModuleWithProviders<any> = RouterModule.forRoot(appRoutes);
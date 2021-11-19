import { Routes, RouterModule } from "@angular/router";
import { ModuleWithProviders } from "@angular/core";
import { HomeComponent } from "./components/home/home.component";
import { PeliculasComponent } from "./components/peliculas/peliculas.component";
import { ModificarComponent } from "./components/modificar/modificar.component";

const appRoutes: Routes = [
    { path: "", component: HomeComponent },
    { path: "home", component: HomeComponent },
    { path: "peliculas/genero/:genero", component: PeliculasComponent },
    { path: "peliculas/nacionalidad/:nacionalidad", component: PeliculasComponent }
    ,
    { path: "peliculas/buscar/:titulo", component: PeliculasComponent },
    { path: "modificar", component: ModificarComponent },

];

export const appRoutingProviders: any[] = [];
export const routing: ModuleWithProviders<any> = RouterModule.forRoot(appRoutes);
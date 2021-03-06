import { Routes, RouterModule } from "@angular/router";
import { ModuleWithProviders } from "@angular/core";

import { HomeComponent } from "./components/home/home.component";
import { MusicaComponent } from "./components/musica/musica.component";
import { TvComponent } from "./components/tv/tv.component";
import { CineComponent } from "./components/cine/cine.component";
import { Error404Component } from "./components/error404/error404.component";
import { NumerodobleComponent } from "./components/numerodoble/numerodoble.component";
import { CollatzComponent } from "./components/collatz/collatz.component";
import { ListaproductosComponent } from "./components/listaproductos/listaproductos.component";
import { CocheComponent } from "./components/coche/coche.component";
import { ConcesionarioComponent } from "./components/concesionario/concesionario.component";



const appRoutes: Routes = [
    { path: "", component: HomeComponent },
    { path: "home", component: HomeComponent },
    { path: "coche", component: CocheComponent },
    { path: "concesionario", component: ConcesionarioComponent },
    { path: "musica", component: MusicaComponent },
    { path: "television", component: TvComponent },
    { path: "cine", component: CineComponent },
    { path: "numerodoble", component: NumerodobleComponent },
    { path: "numerodoble/:numero", component: NumerodobleComponent },
    { path: "collatz/:numero", component: CollatzComponent },
    { path: "productos", component: ListaproductosComponent },
    { path: "**", component: Error404Component }
];

export const appRoutingProviders: any[] = [];
export const routing: ModuleWithProviders<any> = RouterModule.forRoot(appRoutes);

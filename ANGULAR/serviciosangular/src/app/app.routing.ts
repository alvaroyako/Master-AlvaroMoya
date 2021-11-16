import { Routes, RouterModule } from "@angular/router";
import { ModuleWithProviders } from "@angular/core";

import { HomeComponent } from "./components/home/home.component";
import { LibreriaComponent } from "./components/libreria/libreria.component";
import { ComicsinyecionComponent } from "./components/comicsinyecion/comicsinyecion.component";
import { PersonasapiComponent } from "./components/personasapi/personasapi.component";
import { EmpleadossalarioComponent } from "./components/empleadossalario/empleadossalario.component";



const appRoutes: Routes = [
    { path: "", component: HomeComponent },
    { path: "home", component: HomeComponent },
    { path: "libreria", component: LibreriaComponent },
    { path: "comicsinyeccion", component: ComicsinyecionComponent },
    { path: "personas", component: PersonasapiComponent },
    { path: "salarios", component: EmpleadossalarioComponent },
];

export const appRoutingProviders: any[] = [];
export const routing: ModuleWithProviders<any> = RouterModule.forRoot(appRoutes);

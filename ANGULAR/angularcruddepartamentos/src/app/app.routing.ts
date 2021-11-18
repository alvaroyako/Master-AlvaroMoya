import { Routes, RouterModule } from "@angular/router";
import { ModuleWithProviders } from "@angular/core";

import { HomeComponent } from "./components/home/home.component";
import { InsertardepartamentoComponent } from "./components/insertardepartamento/insertardepartamento.component";
import { EditardepartamentoComponent } from "./components/editardepartamento/editardepartamento.component";
import { EmpleadosdepartamentoComponent } from "./components/empleadosdepartamento/empleadosdepartamento.component";
import { IncrementarsalarioComponent } from "./components/incrementarsalario/incrementarsalario.component";


const appRoutes: Routes = [
    { path: "", component: HomeComponent },
    { path: "home", component: HomeComponent },
    { path: "insertar", component: InsertardepartamentoComponent },
    { path: "editar/:numero/:nombre/:localidad", component: EditardepartamentoComponent },
    { path: "empleados/:iddepartamento", component: EmpleadosdepartamentoComponent },
    { path: "salario/:idempleado", component: IncrementarsalarioComponent },
];

export const appRoutingProviders: any[] = [];
export const routing: ModuleWithProviders<any> = RouterModule.forRoot(appRoutes);

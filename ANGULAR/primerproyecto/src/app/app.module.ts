import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { PrimerComponent } from 'src/app/components/primercomponent/primercomponent.component';
import { HooksAngular } from 'src/app/components/hooksangular/hooksangular.component';
import { Deportes } from 'src/app/components/deportes/deportes.component';
import { FormularioBindingModel } from 'src/app/components/Formularios/formulariobindingmodel.component';
import { FormularioReferencia } from 'src/app/components/FormulariosReferencia/formulariosreferencia.component';
import { FormsModule } from '@angular/forms';
import { TablaMultiplicar } from 'src/app/components/TablaMultiplicar/tabla.component';

@NgModule({
  declarations: [
    AppComponent,
    PrimerComponent,
    HooksAngular,
    Deportes,
    FormularioBindingModel,
    FormularioReferencia,
    TablaMultiplicar
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

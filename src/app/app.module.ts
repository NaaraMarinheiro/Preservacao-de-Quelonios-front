import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardModule } from './dashboard/dashboard.module';
import { FormularioColetaComponent } from './dashboard/formulario/formulario-coleta/formulario-coleta.component';
import { FormularioEclosaoComponent } from './dashboard/formulario/formulario-eclosao/formulario-eclosao.component';
import { FormularioSolturaComponent } from './dashboard/formulario/formulario-soltura/formulario-soltura.component';
import { UsuarioEditarComponent } from './dashboard/usuario/usuario-editar/usuario-editar.component';
import { UsuarioListaComponent } from './dashboard/usuario/usuario-lista/usuario-lista.component';
import { UsuarioNovoComponent } from './dashboard/usuario/usuario-novo/usuario-novo.component';


@NgModule({
  declarations: [
    AppComponent,
    FormularioColetaComponent,
    FormularioEclosaoComponent,
    FormularioSolturaComponent,
    UsuarioEditarComponent,
    UsuarioListaComponent,
    UsuarioNovoComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    DashboardModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

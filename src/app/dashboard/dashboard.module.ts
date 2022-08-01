import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgChartsModule } from 'ng2-charts';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { CicloRoutingModule } from './ciclo/ciclo-routing.module';
import { CicloModule } from './ciclo/ciclo.module';
import { UsuarioModule } from './usuario/usuario.module';
import { UsuarioRoutingModule } from './usuario/usuario-routing.module';
import { RelatorioModule } from './relatorio/relatorio.module';
import { RelatorioRoutingModule } from './relatorio/relatorio-routing.module';

import { DashboardComponent } from './dashboard.component';
import { HomeComponent } from './home/home.component';
import { ColetaCadastrarComponent } from './formulario/coleta-cadastrar/coleta-cadastrar.component';
import { ColetaEditarComponent } from './formulario/coleta-editar/coleta-editar.component';
import { EclosaoCadastrarComponent } from './formulario/eclosao-cadastrar/eclosao-cadastrar.component';
import { EclosaoEditarComponent } from './formulario/eclosao-editar/eclosao-editar.component';
import { SolturaCadastrarComponent } from './formulario/soltura-cadastrar/soltura-cadastrar.component';
import { SolturaEditarComponent } from './formulario/soltura-editar/soltura-editar.component';
import { ViagemCadastrarComponent } from './viagem/viagem-cadastrar/viagem-cadastrar.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ViagemEditarComponent } from './viagem/viagem-editar/viagem-editar.component';

@NgModule({
  declarations: [
    DashboardComponent,
    HomeComponent,
    ColetaCadastrarComponent,
    ColetaEditarComponent,
    EclosaoCadastrarComponent,
    EclosaoEditarComponent,
    SolturaCadastrarComponent,
    SolturaEditarComponent,
    ViagemCadastrarComponent,
    ViagemEditarComponent
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    CicloRoutingModule,
    CicloModule,
    UsuarioModule,
    UsuarioRoutingModule,
    RelatorioModule,
    RelatorioRoutingModule,
    ReactiveFormsModule,
    NgChartsModule
  ],
  exports: [
    DashboardComponent,
  ]
})
export class DashboardModule { }

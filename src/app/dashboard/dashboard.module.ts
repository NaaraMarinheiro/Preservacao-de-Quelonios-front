import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { CicloRoutingModule } from './ciclo/ciclo-routing.module';
import { CicloModule } from './ciclo/ciclo.module';
import { UsuarioModule } from './usuario/usuario.module';
import { UsuarioRoutingModule } from './usuario/usuario-routing.module';
import { RelatorioModule } from './relatorio/relatorio.module';
import { RelatorioRoutingModule } from './relatorio/relatorio-routing.module';

import { DashboardComponent } from './dashboard.component';
import { HomeComponent } from './home/home.component';
import { ViagemItemComponent } from './viagem/viagem-item/viagem-item.component';

@NgModule({
  declarations: [
    DashboardComponent,
    HomeComponent,
    

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
    ReactiveFormsModule
  
    

  ],
  exports: [
    DashboardComponent,
  ]
})
export class DashboardModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './dashboard.component';
import { CicloRoutingModule } from './ciclo/ciclo-routing.module';
import { CicloModule } from './ciclo/ciclo.module';
import { UsuarioModule } from './usuario/usuario.module';
import { UsuarioRoutingModule } from './usuario/usuario-routing.module';
import { RelatorioModule } from './relatorio/relatorio.module';
import { RelatorioRoutingModule } from './relatorio/relatorio-routing.module';
import { HomeComponent } from './home/home.component';
import { ViagemCadastrarComponent } from './viagem/viagem-cadastrar/viagem-cadastrar.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ViagemEditarComponent } from './viagem/viagem-editar/viagem-editar.component';


@NgModule({
  declarations: [
    DashboardComponent,
    HomeComponent,
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
    ReactiveFormsModule ,

    

  ],
  exports: [
    DashboardComponent,
  ]
})
export class DashboardModule { }

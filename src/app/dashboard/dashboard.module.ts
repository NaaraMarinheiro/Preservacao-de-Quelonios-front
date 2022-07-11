import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './dashboard.component';
import { RelatorioComponent } from './relatorio/relatorio.component';
import { CicloRoutingModule } from './ciclo/ciclo-routing.module';
import { CicloModule } from './ciclo/ciclo.module';

@NgModule({
  declarations: [
    DashboardComponent,
    RelatorioComponent,
  
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    CicloRoutingModule,
    CicloModule
  ],
  exports: [
    DashboardComponent
  ]
})
export class DashboardModule { }

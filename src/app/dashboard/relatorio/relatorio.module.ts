import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RelatorioComponent } from './relatorio.component';
import { RelatorioRoutingModule } from './relatorio-routing.module';

@NgModule({
  declarations: [
    RelatorioComponent
  ],
  imports: [
    CommonModule,
    RelatorioRoutingModule
  ],
  exports: []
})
export class RelatorioModule { }

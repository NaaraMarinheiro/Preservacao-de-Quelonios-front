import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutBaseComponent } from './layout-base/layout-base.component';
import { ViagemCadastrarComponent } from './viagem/viagem-cadastrar/viagem-cadastrar/viagem-cadastrar.component';
import { ViagemEditarComponent } from './viagem/viagem-editar/viagem-editar/viagem-editar.component';



@NgModule({
  declarations: [
    LayoutBaseComponent,
    // ViagemEditarComponent,
    // ViagemCadastrarComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    LayoutBaseComponent
  ]
})
export class DashboardModule { }

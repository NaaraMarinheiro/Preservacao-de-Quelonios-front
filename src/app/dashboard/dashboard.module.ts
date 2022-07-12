import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutBaseComponent } from './layout-base/layout-base.component';
import { ViagemCadastrarComponent } from './viagem/viagem-cadastrar/viagem-cadastrar/viagem-cadastrar.component';



@NgModule({
  declarations: [
    LayoutBaseComponent,
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

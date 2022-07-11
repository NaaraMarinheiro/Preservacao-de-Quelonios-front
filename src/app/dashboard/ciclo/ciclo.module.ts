import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CicloEditarComponent } from './ciclo-editar/ciclo-editar.component';
import { CicloCadastrarComponent } from './ciclo-cadastrar/ciclo-cadastrar.component';
import { CicloComponent } from './ciclo.component';
import { CicloRoutingModule } from './ciclo-routing.module';

@NgModule({
  declarations: [
    CicloEditarComponent,
    CicloCadastrarComponent,
    CicloComponent
  ],
  imports: [
    CommonModule,
    CicloRoutingModule
  ],
  exports: [
  ]
})
export class CicloModule { }

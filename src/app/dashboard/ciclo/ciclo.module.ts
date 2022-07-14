import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CicloEditarComponent } from './ciclo-editar/ciclo-editar.component';
import { CicloCadastrarComponent } from './ciclo-cadastrar/ciclo-cadastrar.component'; 
import { CicloRoutingModule } from './ciclo-routing.module';
import { CicloItemComponent } from './ciclo-item/ciclo-item.component';
import { ViagemItemComponent } from '../viagem/viagem-item/viagem-item.component';
import { CicloComponent } from './ciclo-lista/ciclo.component';

@NgModule({
  declarations: [
    CicloEditarComponent,
    CicloCadastrarComponent,
    CicloComponent,
    CicloItemComponent,
    ViagemItemComponent,
  ],
  imports: [
    CommonModule,
    CicloRoutingModule
  ],
  exports: [
    
  ]
})
export class CicloModule { }

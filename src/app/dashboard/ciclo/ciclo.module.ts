import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { CicloRoutingModule } from './ciclo-routing.module';

import { CicloEditarComponent } from './ciclo-editar/ciclo-editar.component';
import { CicloCadastrarComponent } from './ciclo-cadastrar/ciclo-cadastrar.component'; 
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
    CicloRoutingModule,
    ReactiveFormsModule
  ],
  exports: [
    
  ]
})
export class CicloModule { }

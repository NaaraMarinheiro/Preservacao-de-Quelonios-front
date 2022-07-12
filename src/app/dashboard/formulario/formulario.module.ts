import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ColetaCadastrarComponent } from './coleta-cadastrar/coleta-cadastrar.component';
import { ColetaEditarComponent } from './coleta-editar/coleta-editar.component';
import { ColetaItemComponent } from './coleta-item/coleta-item.component';
import { EclosaoCadastrarComponent } from './eclosao-cadastrar/eclosao-cadastrar.component';
import { EclosaoEditarComponent } from './eclosao-editar/eclosao-editar.component';
import { EclosaoItemComponent } from './eclosao-item/eclosao-item.component';
import { SolturaCadastrarComponent } from './soltura-cadastrar/soltura-cadastrar.component';
import { SolturaEditarComponent } from './soltura-editar/soltura-editar.component';
import { SolturaItemComponent } from './soltura-item/soltura-item.component';

@NgModule({
  declarations: [
    ColetaCadastrarComponent,
    ColetaEditarComponent,
    ColetaItemComponent,
    EclosaoCadastrarComponent,
    EclosaoEditarComponent,
    EclosaoItemComponent,
    SolturaCadastrarComponent,
    SolturaEditarComponent,
    SolturaItemComponent
  ],
  imports: [
    CommonModule
  ]
})
export class FormularioModule { }

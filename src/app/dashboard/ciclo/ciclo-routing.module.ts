import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ColetaCadastrarComponent } from '../formulario/coleta-cadastrar/coleta-cadastrar.component';
import { ColetaEditarComponent } from '../formulario/coleta-editar/coleta-editar.component';
import { ColetaItemComponent } from '../formulario/coleta-item/coleta-item.component';
import { EclosaoCadastrarComponent } from '../formulario/eclosao-cadastrar/eclosao-cadastrar.component';
import { EclosaoEditarComponent } from '../formulario/eclosao-editar/eclosao-editar.component';
import { EclosaoItemComponent } from '../formulario/eclosao-item/eclosao-item.component';
import { SolturaCadastrarComponent } from '../formulario/soltura-cadastrar/soltura-cadastrar.component';
import { SolturaEditarComponent } from '../formulario/soltura-editar/soltura-editar.component';
import { SolturaItemComponent } from '../formulario/soltura-item/soltura-item.component';
import { ViagemCadastrarComponent } from '../viagem/viagem-cadastrar/viagem-cadastrar.component';
import { ViagemEditarComponent } from '../viagem/viagem-editar/viagem-editar.component';
import { ViagemItemComponent } from '../viagem/viagem-item/viagem-item.component';
import { CicloCadastrarComponent } from './ciclo-cadastrar/ciclo-cadastrar.component';
import { CicloEditarComponent } from './ciclo-editar/ciclo-editar.component';
import { CicloItemComponent } from './ciclo-item/ciclo-item.component';
import { CicloComponent } from './ciclo-lista/ciclo.component';

const routes: Routes = [
  { path: "", component: CicloComponent },
  { path: 'cadastrar', component: CicloCadastrarComponent },
  { path: 'editar', component: CicloEditarComponent },
  { path: ':cicloId', component: CicloItemComponent },
  // { path: ':cicloId/viagens', component: ViagemListar },
  { path: ':cicloId/viagem/cadastrar', component: ViagemCadastrarComponent },
  { path: ':cicloId/viagem/:viagemId', component: ViagemItemComponent },
  { path: ':cicloId/viagem/:viagemId/editar', component: ViagemEditarComponent },
  
  { path: ':cicloId/viagem/:viagemId/coleta/cadastrar', component: ColetaCadastrarComponent },
  { path: ':cicloId/viagem/:viagemId/coleta/:idColeta', component: ColetaItemComponent },
  { path: ':cicloId/viagem/:viagemId/coleta/:idColeta/editar', component: ColetaEditarComponent },

  { path: ':cicloId/viagem/:viagemId/eclosao/cadastrar', component: EclosaoCadastrarComponent },
  { path: ':cicloId/viagem/:viagemId/eclosao/:idEclsao', component: EclosaoItemComponent },
  { path: ':cicloId/viagem/:viagemId/eclosao/:idEclosao/editar', component: EclosaoEditarComponent},

  { path: ':cicloId/viagem/:viagemId/soltura/cadastrar', component: SolturaCadastrarComponent },
  { path: ':cicloId/viagem/:viagemId/soltura/:idSoltura', component: SolturaItemComponent },
  { path: ':cicloId/viagem/:viagemId/soltura/:idSoltura/editar', component: SolturaEditarComponent },

  //{ path: "**", component: CicloComponent} - configurar página not found
  
]
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CicloRoutingModule { }

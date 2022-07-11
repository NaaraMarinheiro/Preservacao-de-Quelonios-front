import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CicloCadastrarComponent } from './ciclo-cadastrar/ciclo-cadastrar.component';
import { CicloEditarComponent } from './ciclo-editar/ciclo-editar.component';
import { CicloComponent } from './ciclo.component';

const routes: Routes = [
  {path: "", component: CicloComponent},
  { path: 'cadastrar', component: CicloCadastrarComponent },
  { path: 'editar', component: CicloEditarComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CicloRoutingModule { }

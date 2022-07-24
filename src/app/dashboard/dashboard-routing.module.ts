import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CicloModule } from './ciclo/ciclo.module';
import { DashboardComponent } from './dashboard.component';
import { HomeComponent } from './home/home.component';
import { RelatorioModule } from './relatorio/relatorio.module';
import { UsuarioModule } from './usuario/usuario.module';

const routes: Routes = [
  { path: '', component: DashboardComponent, children: [
    { path: 'home', component: HomeComponent},
    { path: 'ciclo', loadChildren: ()=> CicloModule},
    { path: 'usuario', loadChildren: ()=> UsuarioModule},
    { path: 'relatorio', loadChildren: ()=> RelatorioModule},
  ]},
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
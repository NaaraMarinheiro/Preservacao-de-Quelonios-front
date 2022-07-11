import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CicloModule } from './ciclo/ciclo.module';


const routes: Routes = [
  // { path: 'relatorio', loadChildren: "./src" },
  { path: 'ciclo', loadChildren: ()=> CicloModule}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
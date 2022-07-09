import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutBaseComponent } from './layout-base/layout-base.component';



@NgModule({
  declarations: [
    LayoutBaseComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    LayoutBaseComponent
  ]
})
export class DashboardModule { }

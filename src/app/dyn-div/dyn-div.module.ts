import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DynDivRoutingModule } from './dyn-div-routing.module';
import { DynDivComponent } from './dyn-div.component';


@NgModule({
  declarations: [DynDivComponent],
  imports: [
    CommonModule,
    DynDivRoutingModule
  ]
})
export class DynDivModule { }

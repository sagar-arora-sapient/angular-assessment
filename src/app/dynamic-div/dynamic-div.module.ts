import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DynamicDivRoutingModule } from './dynamic-div-routing.module';
import { DynamicDivComponent } from './dynamic-div.component';
import { PlaceholderDirective } from './placeholder.directive';
import { DynDivCmpComponent } from './dyn-div-cmp/dyn-div-cmp.component';


@NgModule({
  declarations: [DynamicDivComponent, PlaceholderDirective, DynDivCmpComponent],
  imports: [
    CommonModule,
    DynamicDivRoutingModule
  ]
})
export class DynamicDivModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SmartTableRoutingModule } from './smart-table-routing.module';
import { SmartTableComponent } from './smart-table.component';


@NgModule({
  declarations: [SmartTableComponent],
  imports: [
    CommonModule,
    SmartTableRoutingModule
  ]
})
export class SmartTableModule { }

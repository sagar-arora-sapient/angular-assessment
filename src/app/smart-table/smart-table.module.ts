import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SmartTableRoutingModule } from './smart-table-routing.module';
import { SmartTableComponent } from './smart-table.component';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [SmartTableComponent],
  imports: [
    CommonModule,
    SmartTableRoutingModule,
    HttpClientModule
  ]
})
export class SmartTableModule { }

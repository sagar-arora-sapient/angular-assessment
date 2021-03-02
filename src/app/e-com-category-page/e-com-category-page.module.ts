import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EComCategoryPageRoutingModule } from './e-com-category-page-routing.module';
import { EComCategoryPageComponent } from './e-com-category-page.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DropdownDirective } from './dropdown.directive';


@NgModule({
  declarations: [
    EComCategoryPageComponent,
    DropdownDirective
  ],
  imports: [
    CommonModule,
    EComCategoryPageRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class EComCategoryPageModule { }

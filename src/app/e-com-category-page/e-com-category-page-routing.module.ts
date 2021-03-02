import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EComCategoryPageComponent } from './e-com-category-page.component';

const routes: Routes = [{ path: '', component: EComCategoryPageComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EComCategoryPageRoutingModule { }

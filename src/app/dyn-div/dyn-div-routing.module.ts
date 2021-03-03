import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DynDivComponent } from './dyn-div.component';

const routes: Routes = [{ path: '', component: DynDivComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DynDivRoutingModule { }

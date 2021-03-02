import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CountDownIOComponent } from './count-down-io.component';

const routes: Routes = [{ path: '', component: CountDownIOComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CountDownIORoutingModule { }

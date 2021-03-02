import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CountDownSubjectComponent } from './count-down-subject.component';

const routes: Routes = [{ path: '', component: CountDownSubjectComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CountDownSubjectRoutingModule { }

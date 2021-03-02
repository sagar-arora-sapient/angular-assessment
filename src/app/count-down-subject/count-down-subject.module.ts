import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CountDownSubjectRoutingModule } from './count-down-subject-routing.module';
import { CountDownSubjectComponent } from './count-down-subject.component';
import { TimerComponent } from './timer/timer.component';
import { ControlsComponent } from './controls/controls.component';
import { LogsComponent } from './logs/logs.component';
import { CounterComponent } from './counter/counter.component';


@NgModule({
  declarations: [CountDownSubjectComponent, TimerComponent, ControlsComponent, LogsComponent, CounterComponent],
  imports: [
    CommonModule,
    CountDownSubjectRoutingModule
  ]
})
export class CountDownSubjectModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CountDownIORoutingModule } from './count-down-io-routing.module';
import { CountDownIOComponent } from './count-down-io.component';
import { TimerComponent } from './timer/timer.component';
import { ControlsComponent } from './controls/controls.component';
import { LogsComponent } from './logs/logs.component';
import { CounterComponent } from './counter/counter.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    CountDownIOComponent, 
    TimerComponent, 
    ControlsComponent, 
    LogsComponent, 
    CounterComponent
  ],
  imports: [
    CommonModule,
    CountDownIORoutingModule,
    FormsModule, 
    ReactiveFormsModule
  ]
})

export class CountDownIOModule { }

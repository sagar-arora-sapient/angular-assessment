import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-count-down-io',
  templateUrl: './count-down-io.component.html',
  styleUrls: ['./count-down-io.component.css']
})
export class CountDownIOComponent implements OnInit {
  @Output() intervalIOEvent = new EventEmitter<number>();
  ioData: number;
  startCount: number;
  pauseCount: number;
  startDate: Date[]=[];
  pauseDate: Date[]=[];
  constructor() { }

  ngOnInit(): void {
    this.intervalIOEvent.emit(this.ioData);
    console.log('oninit', this.ioData);
  }

  onIntervalEvent(data: number) {
    console.log('data at io is', data);
    this.ioData = data;
  }

  onStartClick(data: number) {
    this.startCount = data;
    console.log('Start count', data);
  }

  onPauseClick(data: number) {
    this.pauseCount = data;
    console.log('Pause count', data);
  }

  onStartTime(start: Date){
    if(start){
      this.startDate.push(start);
      console.log('Start date', this.startDate);
    }else{
      console.log('empty start');
      this.startDate.length=0;
    }
  }

  onPausedTime(paused: Date){
    if(paused){
      this.pauseDate.push(paused);
      console.log('Paused date', this.pauseDate);
    }else{
      console.log('empty pause');
      this.pauseDate.length=0;
    }
  }

}

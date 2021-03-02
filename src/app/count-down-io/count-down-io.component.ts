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
  }

  onIntervalEvent(data: number) {
    this.ioData = data;
  }

  onStartClick(data: number) {
    this.startCount = data;
  }

  onPauseClick(data: number) {
    this.pauseCount = data;
  }

  onStartTime(start: Date){
    if(start){
      this.startDate.push(start);
    }else{
      this.startDate.length=0;
    }
  }

  onPausedTime(paused: Date){
    if(paused){
      this.pauseDate.push(paused);
    }else{
      this.pauseDate.length=0;
    }
  }

}

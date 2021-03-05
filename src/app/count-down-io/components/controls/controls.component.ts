import { Component, OnInit, Output, EventEmitter, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-controls',
  templateUrl: './controls.component.html',
  styleUrls: ['./controls.component.css']
})
export class ControlsComponent implements OnInit, OnDestroy {
  @Output() intervalEvent = new EventEmitter<number>();
  @Output() startClick = new EventEmitter<number>();
  @Output() pauseClick = new EventEmitter<number>();
  @Output() startTime = new EventEmitter<Date>();
  @Output() pausedTime = new EventEmitter<Date>();

  interval;
  lastNumber: number = 0;
  time: number;
  pauseStatus: boolean = false;
  initialTime: number;
  lastEmit: number;
  startClickCount: number = 0;
  pauseClickCount: number = 0;
  startDate = new Date();
  pausedAt:number[] = [];
  ids:number[] = [];
  constructor() { }
  
  ngOnInit() {}
  
  public onStartPause(pauseStatus) {
    if(!pauseStatus){
      this.startClickCount++;
      this.startClick.emit(this.startClickCount);
      this.startTime.emit(this.startDate);
      this.lastNumber=this.lastEmit?this.lastEmit: this.time;
      this.intervalEvent.emit(this.lastNumber);
      this.interval=setInterval(()=>{
        if(this.lastNumber>0){
        this.intervalEvent.emit(this.lastNumber-1);
        this.lastNumber--;
        this.lastEmit = this.lastNumber;
        }else{
          alert('Countdown stopped!!');
          this.clearExistingIntervals();
        }
      }, 1000);
      this.pauseStatus =! this.pauseStatus;
      this.ids.push(this.interval);
    }else{
      this.pauseClickCount++;
      this.pausedAt.push(this.lastEmit);
      this.pausedTime.emit(this.startDate);
      this.pauseClick.emit(this.pauseClickCount);
      this.clearExistingIntervals();
      this.pauseStatus = false;
      this.intervalEvent.emit(this.lastEmit);
      this.lastNumber = this.lastEmit;
    }
  }

  public clearExistingIntervals() {
    let len = this.ids.length;
    while (len > 0) {
      const id = this.ids[len - 1];
      clearTimeout(id);
      const index = this.ids.indexOf(id);
      if (index > -1) {
        this.ids.splice(index, 1);
      }
      len--;
    }
  }

  public onReset() {
    this.clearExistingIntervals();
    // Emitting the initial time
    this.intervalEvent.emit(this.time);

    // Clearing the UI after Reset()
    this.lastNumber = this.time;
    this.lastEmit = undefined;
    this.pauseStatus = false;
    this.startClickCount = 0;
    this.startClick.emit(this.startClickCount);
    this.pauseClickCount = 0;
    this.pauseClick.emit(this.pauseClickCount);
    this.pausedAt = [];
    this.startTime.emit();
    this.pausedTime.emit();
    this.ids = [];
  }

  ngOnDestroy() {
    clearInterval(this.interval);
  }

}

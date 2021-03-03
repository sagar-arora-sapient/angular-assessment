import { Component, OnInit } from '@angular/core';
import { CountdownService } from '../countdown.service';

@Component({
  selector: 'app-controls',
  templateUrl: './controls.component.html',
  styleUrls: ['./controls.component.css']
})
export class ControlsComponent implements OnInit {

  interval;
  lastNumber: number = 0;
  time: number;
  pauseStatus: boolean = false;
  initialTime: number;
  lastEmit: number;
  startClickCount: number = 0;
  pauseClickCount: number = 0;
  startDate = new Date();
  pausedAt = [];
  ids = [];
  constructor(private countdownService: CountdownService) {}
  
  ngOnInit(): void {}
  
  onStartPause(pauseStatus) {
    
    if(!pauseStatus ){
      this.startClickCount++;
      this.countdownService.startClick.emit(this.startClickCount);
      this.countdownService.startTime.emit(this.startDate);
      this.lastNumber=this.lastEmit?this.lastEmit: this.time;
      this.countdownService.lastNumber.emit(this.lastNumber);
      this.countdownService.intervalEvent.emit(this.lastNumber);
      this.interval=setInterval(()=>{
        if(this.lastNumber>0){
          this.countdownService.lastNumber.emit(this.lastNumber-1);
          this.lastNumber--;
          this.lastEmit = this.lastNumber;
        }else{
          this.clearExistingIntervals();
          alert('Countdown stopped!!');
        }
      },1000);
      this.pauseStatus =! this.pauseStatus;
      this.ids.push(this.interval);
    }else{
      this.pauseClickCount++;
      this.pausedAt.push(this.lastEmit);
      this.countdownService.pausedTime.emit(this.startDate);
      this.countdownService.pauseClick.emit(this.pauseClickCount);
      this.clearExistingIntervals();
      this.pauseStatus = false;
      this.countdownService.intervalEvent.emit(this.lastEmit);
      this.lastNumber = this.lastEmit;
    }
  }

  clearExistingIntervals(){
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

  onReset() {
    this.clearExistingIntervals();
    // Emitting the initial time
    this.countdownService.intervalEvent.emit(this.time);
    // Clearing the UI after Reset()
    this.lastNumber=this.time;
    this.lastEmit=undefined;
    this.pauseStatus = false;
    this.startClickCount = 0;
    this.countdownService.startClick.emit(this.startClickCount);
    this.pauseClickCount = 0;
    this.countdownService.pauseClick.emit(this.pauseClickCount);
    this.pausedAt=[];
    this.countdownService.startTime.emit();
    this.countdownService.pausedTime.emit();
    this.ids=[];
  }

  ngOnDestroy() {
    clearInterval(this.interval);
  }

}

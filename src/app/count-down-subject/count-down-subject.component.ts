import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { CountdownService } from './countdown.service';

@Component({
  selector: 'app-count-down-subject',
  templateUrl: './count-down-subject.component.html',
  styleUrls: ['./count-down-subject.component.css']
})
export class CountDownSubjectComponent implements OnInit {
  ioData: number;
  startCount: number;
  pauseCount: number;
  startDate: Date[]=[];
  pauseDate: Date[]=[];
  constructor(private countdownService: CountdownService) { }

  ngOnInit(): void {
    this.countdownService.intervalEvent.emit(this.ioData);
    this.countdownService.pauseClick.subscribe((pause:number)=>{
      this.pauseCount = pause;
    });
    this.countdownService.startClick.subscribe((start:number)=>{
      this.startCount = start;
    });
    this.countdownService.startTime.subscribe((startTime:Date)=>{
      startTime? this.startDate.push(startTime): this.startDate.length=0;
    });

    this.countdownService.pausedTime.subscribe((pauseTime: Date)=>{
      pauseTime? this.pauseDate.push(pauseTime): this.pauseDate.length=0;
    });
    this.countdownService.intervalEvent.subscribe((intervalData:number)=>{
      this.ioData = intervalData;
    })
  }
}

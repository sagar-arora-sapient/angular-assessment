import { Component, OnInit, Input } from '@angular/core';
import { CountdownService } from '../countdown.service';

@Component({
  selector: 'app-timer',
  templateUrl: './timer.component.html',
  styleUrls: ['./timer.component.css']
})
export class TimerComponent implements OnInit {
  @Input() interval: number;
  constructor(private countdownService: CountdownService) { }
  
  time_duration: number;
  
  ngOnInit(): void {
    this.countdownService.lastNumber.subscribe((duration: number)=>{
      this.time_duration = duration;
    });
    this.countdownService.intervalEvent.subscribe((intervalData: number)=>{
      this.time_duration=intervalData;
    });
  }
}

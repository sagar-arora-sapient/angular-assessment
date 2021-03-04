import { Component, OnInit } from '@angular/core';
import { CountdownService } from '../../services/countdown.service';

@Component({
  selector: 'app-timer',
  templateUrl: './timer.component.html',
  styleUrls: ['./timer.component.css']
})
export class TimerComponent implements OnInit {
  time_duration: number;
  
  constructor(private countdownService: CountdownService) { }
  
  ngOnInit(): void {
    this.countdownService.lastNumber.subscribe((duration: number)=>{
      this.time_duration = duration;
    });
    this.countdownService.intervalEvent.subscribe((intervalData: number)=>{
      this.time_duration=intervalData;
    });
  }
}

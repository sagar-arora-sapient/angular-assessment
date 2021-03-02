import { AfterViewInit, Component, Input, OnChanges, OnDestroy, OnInit } from '@angular/core';

@Component({
  selector: 'app-timer',
  templateUrl: './timer.component.html',
  styleUrls: ['./timer.component.css']
})
export class TimerComponent implements OnInit{
  @Input() interval: number;
  constructor() { }
  // time_duration: number=1000;
  // intervalRef;
  // lastNumber:number=0;
  // pauseNumbers=[];

  ngOnInit(): void {

  }

  myChanges(){
    // console.log('data at timer is', this.interval);
    // var data = new Promise((resolve, reject)=>{

    // });
    // this.lastNumber = this.interval;
    // this.intervalRef = setInterval(()=>{
    // // this.intervalEvent.emit(this.lastNumber+1);
    // this.lastNumber--;
    // this.pauseNumbers.push(this.lastNumber);
    // console.log('emit', this.lastNumber);
    // },1000);
  }
  
  // ngOnDestroy() {
  //   clearInterval(this.intervalRef);
  // }

}

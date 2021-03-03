import { Injectable, EventEmitter } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CountdownService {
  lastNumber = new EventEmitter<number>();
  intervalEvent = new EventEmitter<number>();
  startClick = new EventEmitter<number>();
  pauseClick = new EventEmitter<number>();
  startTime = new EventEmitter<Date>();
  pausedTime = new EventEmitter<Date>();
  constructor() { }
}

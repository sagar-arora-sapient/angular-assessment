import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-controls',
  templateUrl: './controls.component.html',
  styleUrls: ['./controls.component.css']
})
export class ControlsComponent implements OnInit {

  constructor() { }
  pausedAt = [];

  ngOnInit(): void {
    this.pausedAt=[];  
    this.pausedAt.fill(4,0,8);
  }

}

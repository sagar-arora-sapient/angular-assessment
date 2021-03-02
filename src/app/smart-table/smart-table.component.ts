import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-smart-table',
  templateUrl: './smart-table.component.html',
  styleUrls: ['./smart-table.component.css']
})

export class SmartTableComponent implements OnInit {
  
  headers = ['a','b','c','d'];

  dataValues = [{a:4,b:'a',c:5,d:6}, {a:5,b:'f',c:3,d:6}];
  
  constructor() { }
  
  ngOnInit(): void {
  }
  
}

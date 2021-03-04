import { Component, HostListener, OnInit } from '@angular/core';

@Component({
  selector: 'app-dyn-div',
  templateUrl: './dyn-div.component.html',
  styleUrls: ['./dyn-div.component.css']
})
export class DynDivComponent implements OnInit {
  divsArray:number[] = [];
  counter:number = 0;

  @HostListener('window:mousewheel', ['$event']) onScrollHost(e: Event): void {
    this.divsArray.push(this.counter++);
  }

  constructor() { }

  ngOnInit(): void {
  }

  onClick(id){
    alert(`Button ${id} is clicked!`);
  }

}

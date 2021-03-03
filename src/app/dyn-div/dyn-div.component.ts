import { Component, HostListener, OnInit } from '@angular/core';

@Component({
  selector: 'app-dyn-div',
  templateUrl: './dyn-div.component.html',
  styleUrls: ['./dyn-div.component.css']
})
export class DynDivComponent implements OnInit {
  divsArray = [];
  counter = 0;

  @HostListener('window:mousewheel', ['$event']) onScrollHost(e: Event): void {
    console.log('event',e);

    this.divsArray.push(this.counter++);
    console.log(this.divsArray);
    // console.log(this.getYPosition(e));
  }
  constructor() { }

  ngOnInit(): void {
  }

  onClick(id){
    alert(`Button ${id} is clicked!`);
  }

}

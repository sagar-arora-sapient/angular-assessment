import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-dyn-div-cmp',
  templateUrl: './dyn-div-cmp.component.html',
  styleUrls: ['./dyn-div-cmp.component.css']
})
export class DynDivCmpComponent implements OnInit {
  @Input() id: number;
  constructor() { } 

  ngOnInit(): void {
  }

}

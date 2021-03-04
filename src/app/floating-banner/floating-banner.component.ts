import { Component, OnInit } from '@angular/core';
import { trigger, state, style, animate, transition } from '@angular/animations';

@Component({
  selector: 'app-floating-banner',
  templateUrl: './floating-banner.component.html',
  styleUrls: ['./floating-banner.component.css'],
  animations: [
    trigger('scroll', [
      state('on', style({left: '-100px'})),
      transition('* => *', [
        style({left: '-100px'}),
        animate(10000, style({left: '100%'}))
      ])
    ])
  ]
})
export class FloatingBannerComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  state = 0;

  scrollDone() {
    this.state++;
  }

}

import { Component, OnInit, Input } from '@angular/core';
import { CountdownService } from '../../services/countdown.service';

@Component({
  selector: 'app-logs',
  templateUrl: './logs.component.html',
  styleUrls: ['./logs.component.css']
})
export class LogsComponent implements OnInit {
  @Input() start: [];
  @Input() pause: [];
  constructor() { }

  ngOnInit(): void {
  }

}

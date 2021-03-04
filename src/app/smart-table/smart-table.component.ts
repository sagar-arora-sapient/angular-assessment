import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-smart-table',
  templateUrl: './smart-table.component.html',
  styleUrls: ['./smart-table.component.css']
})

export class SmartTableComponent implements OnInit {
  
  constructor(private http: HttpClient) { }
  uniqueHeader: string[] = [];
  users: string[] =[];

  private url:string = 'https://jsonplaceholder.typicode.com/users';

  ngOnInit(): void {
    this.getUsers();
  }
  
  getUsers() {
    this.http.get(this.url).subscribe((users:string[])=>{
      this.getKeys(users);
    });
  }

  getKeys(users) {
    this.uniqueHeader = [];
    users.forEach((key,index) => {
      Object.keys(key).forEach((keyValue)=>{
        if (!this.uniqueHeader.includes(keyValue))
          this.uniqueHeader.push(keyValue);
      });
    });
  }
  
  onHeadClick(field){
    console.log('I ma clicked', field);
  }
}

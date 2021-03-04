import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-smart-table',
  templateUrl: './smart-table.component.html',
  styleUrls: ['./smart-table.component.css']
})


export class SmartTableComponent implements OnInit {
  sortedData: string[];
  
  constructor(private http: HttpClient) {
  }
  
  uniqueHeader: string[] = [];
  users: string[] =[];
  sortDir: number = 1;
  state: Object[]=[];
  initState=[];
  
  private url:string = 'https://jsonplaceholder.typicode.com/users';
  
  ngOnInit(): void {
    this.getUsers();
  }
  
  getUsers() {
    this.http.get(this.url).subscribe((users:string[])=>{
      this.users=users;
      this.sortedData = this.users.slice();
      Object.seal(this.sortedData.slice());
      this.getKeys(users);
    });
  }

  getKeys(users) {
    this.uniqueHeader = [];
    users.forEach((key,index) => {
      Object.keys(key).forEach((keyValue)=>{
        if (!this.uniqueHeader.includes(keyValue) && keyValue!=='address' && keyValue!=='company'){
          this.uniqueHeader.push(keyValue);
          this.state.push({name: keyValue, state:''});
        }
      });      
    });
  }
  
  checkState(field){
    for (const [i,v] of this.state.entries()) {
      if(v['name']===field){
        switch(v['state']) {
          case '':
            v['state']='asc';
            this.sortDir = 1;
            this.initState = this.sortedData;
            break;
          case 'asc':
            v['state']='desc';
            this.sortDir = -1;
            this.initState = this.sortedData;
            break;
          case 'desc':
            v['state']='';
            this.sortDir = 0;
            this.users=this.sortedData;
            break;
        }
      }
    }
    this.sortData(field);
  }

  sortData(field) {
    console.log('field', field);
    if(field!=='id'){
      for (const [i,v] of this.users.entries()) {
        this.users.sort((a,b)=>{
          return a[field].localeCompare(b[field])*this.sortDir;
        });      
      }
    }
  }
}

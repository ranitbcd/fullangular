import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  display:string=''
  count=0;
  login(name:any){
    alert(name)
  }
  getData(val:string){
    console.warn(val)
  }
  getValue(val:string){
    console.warn(val)
    this.display=val
  }
  counter(type:string){
    type==='add'?this.count++:this.count--;
    
  }
  constructor() { }

  ngOnInit(): void {
  }

}

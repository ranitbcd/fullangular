import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {
  list:any[]=[]
  addTask(data:string){
    console.log(data)
    this.list.push({id:this.list.length,name:data})
    console.log(this.list)
  }
   removeTask(id:number)
  {
    console.warn(id)
    this.list=this.list.filter(data=>data.id!==id);
  }
  constructor() { }

  ngOnInit(): void {
  }

}
